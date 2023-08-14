`use strict`;

const phoneNumInput = document.querySelector("#phone");
const login__form = document.querySelector(".form_input");
const continue_login_Button = document.querySelector("#Continue_login_button");
const continue_otp_Button = document.querySelector("#Continue_otp_button");
const login__container = document.querySelector(".login__container");
const otp__container = document.querySelector(".otp__container");
const backArrow = document.querySelector(".backArrow");
const otpNumList = document.querySelectorAll(".otpNum");
const total__OTP__Digits = otpNumList.length;

// by default we will make the otp container disable
otp__container.style.display = "none";
// login__container.style.display = "none";

phoneNumInput.addEventListener("click", function () {
  login__form.style.borderBottom = ".21rem solid rgba(192, 32, 163,1)";
});

// to avoid page reload/refreshing when we click on the submit button
login__container.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log(phoneNumInput.value);
  localStorage.setItem("phoneNumber", phoneNumInput.value);
  document.querySelector("#userPhone").textContent =
    "+91 " + phoneNumInput.value;
});

// used input to know how many digits user has entered
phoneNumInput.addEventListener("input", () => {
  if (phoneNumInput.value.length == 10) {
    console.log("User has enter a 10 digit Number!");
    continue_login_Button.style.backgroundColor = "rgba(192, 32, 163,1)";
    continue_login_Button.style.color = "white";
    continue_login_Button.style.cursor = "pointer";
    continue_login_Button.addEventListener("click", () => {
      document.querySelector(".otp__container").style.display = "flex";
      document.querySelector(".login__container").style.display = "none";
    });
  } else {
    continue_login_Button.style.backgroundColor = "rgba(192, 32, 163,.5)";
    continue_login_Button.style.color = "grey";
    continue_login_Button.style.cursor = "auto";
  }
});

phoneNumInput.addEventListener("focusout", () => {
  login__form.style.borderBottom = ".21rem solid rgba(192, 32, 163,.5)";
});

// When click on left arrow,  user will see the login form again by hidding the otp container
backArrow.addEventListener("click", () => {
  otp__container.style.display = "none";
  login__container.style.display = "flex";
});

// for taking OTP from user
let otp = "";
let indexNumber = 0;
otpNumList.forEach((number) => {
  number.addEventListener("focusin", () => {
    number.style.borderBottom = ".41rem solid rgba(192, 32, 163,1)";
  });
  number.addEventListener("focusout", () => {
    number.style.borderBottom = ".41rem solid rgba(192, 32, 163,.5)";
  });
  number.addEventListener("input", function () {
    if (number.value.length == 1) {
      otp += number.value;
      number.blur();
    }
    if (indexNumber < total__OTP__Digits - 1) {
      otpNumList[++indexNumber].focus();
    } else {
      console.log("OTP", otp);
      if (otp.length == 5) {
        continue_otp_Button.style.backgroundColor = "rgba(192, 32, 163,1)";
        continue_otp_Button.style.color = "white";
        continue_otp_Button.style.cursor = "pointer";
      }
    }
  });
});

let generated_OTP = 55555;

// when user clicks the verify otp button :
otp__container.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = generated_OTP == otp ? "RIGHT" : "WRONG";
  otpNumList.forEach((number, i) => {
    number.value = "";
    number.setAttribute("placeholder", status[i]);
  });
  otp = "";
  indexNumber = 0;
});
