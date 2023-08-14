import React, { Component } from "react";
import emailjs, { sendForm } from "emailjs-com";
import { Link } from "react-router-dom";
import "../Css/App.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      otp_entered: "",
      generatedOTP: "",
      status: "Verify OTP",
      name: "",
      mobileNumber: "",
      DOB: "",
      address: "",
      intro: "",
      resume: "",
    };
  }

  //   to store phone number and to know whether uer has enter 10 digit or not
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });

    // Test the email against the pattern using the test() method
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailStatus = pattern.test(event.target.value);

    if (emailStatus) {
      document.querySelector("#Continue_login_button").style.color = "white";
      document.querySelector("#Continue_login_button").style.backgroundColor =
        "rgba(192, 32, 163,1)";
      document.querySelector("#Continue_login_button").style.cursor = "pointer";
    } else {
      document.querySelector("#Continue_login_button").style.color = "grey";
      document.querySelector("#Continue_login_button").style.backgroundColor =
        "rgba(192, 32, 163,.5)";
      document.querySelector("#Continue_login_button").style.cursor = "auto";
    }
  };

  // When user clicks the Continue Button
  loginForm = (event) => {
    event.preventDefault();
    document.querySelector(".login__container").style.display = "none";
    document.querySelector(".otp__container").style.display = "flex";
    document.querySelector("#userEmail").textContent = this.state.email;

    // Send the OTP on the Email using Emailjs
    let randomNumber = Math.trunc(Math.random() * 99999 + 10000);
    let generatedOTP = String(randomNumber).slice(0, 5);
    document.querySelector("#otp").value = generatedOTP;
    this.setState({ generatedOTP });
    emailjs
      .sendForm(
        "service_ditfwia",
        "template_usr4su4",
        document.querySelector("#emailForm"),
        "Cs6ypiJmec--9bm5V"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // When user clicks the backArrow inside the OTP Form
  backArrow = () => {
    document.querySelector(".login__container").style.display = "flex";
    document.querySelector(".otp__container").style.display = "none";
  };

  render() {
    let otp = this.state.otp_entered;
    let indexNumber = 0;

    const otpNumList = document.querySelectorAll(".otpNum");
    otpNumList.forEach((number) => {
      // When user focus on the any OTP input
      number.addEventListener("focusin", () => {
        number.style.borderBottom = ".41rem solid rgba(192, 32, 163,1)";
      });

      // When user loses the focus on any OTP input
      number.addEventListener("focusout", () => {
        number.style.borderBottom = ".41rem solid rgba(192, 32, 163,.5)";
      });

      //  don't letting the user to enter more than 1 digit in any of the fields
      number.addEventListener("input", function () {
        if (number.value.length == 1) {
          otp += number.value;
          number.blur();
        }

        //  for focusing on next otp Number field when current field gets it's digit
        if (indexNumber < otpNumList.length - 1) {
          otpNumList[++indexNumber].focus();
        } else {
          if (otp.length == 5) {
            document.querySelector(
              "#Continue_otp_button"
            ).style.backgroundColor = "rgba(192, 32, 163,1)";
            document.querySelector("#Continue_otp_button").style.color =
              "white";
            document.querySelector("#Continue_otp_button").style.cursor =
              "pointer";
          }
          //   this.setState(otp, otp);
        }
      });
    });

    //   to verify the otp when user clicks the Verify OTP button
    const VerifyOTP = (event) => {
      event.preventDefault();

      let user_otp = "";
      document.querySelectorAll(".otpNum").forEach((eachNumber, i) => {
        user_otp += eachNumber.value;
        this.setState({ otp_entered: user_otp });
      });
      const status = this.state.generatedOTP == user_otp ? "RIGHT" : "WRONG";
      document.querySelectorAll(".otpNum").forEach((number, i) => {
        // making the OTP Field Empty once user clicks the Verify OTP button
        number.value = "";
        number.setAttribute("placeholder", status[i]);
      });
      // Make the button value Verified when user enter the correct otp
      if (this.state.generatedOTP == user_otp) {
        localStorage.setItem("email", this.state.email);
        document.querySelector("#Continue_otp_button").style.cursor = "auto";
        document.querySelector("#Continue_otp_button").style.backgroundColor =
          "rgb(11,119,8)";
        document.querySelector("#userEmail").style.color = "rgb(11, 119, 8)";
        this.setState({ status: "Verified" });
        document.querySelectorAll(".otpNum").forEach((number, i) => {
          // making the otp field disabled
          number.setAttribute("disabled", "disabled");
          number.style.borderBottom = ".41rem solid rgb(11, 119, 8)";
        });
        document.querySelector(".backArrow").style.visibility = "hidden";
        setTimeout(() => {
          window.alert("Redirecting to Internship Form...");
          document.querySelector("#internshipForm").click();
        }, 2000);
      }
      indexNumber = 0;
    };
    return (
      <div className="parent center">
        <form className="login__container center" method="post" id="emailForm">
          <div className="form_title">Login to continue</div>
          <div className="form_input" id="form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email address"
              required
              autoComplete="off"
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="submit_Login center">
            <input
              type="submit"
              value="Continue"
              id="Continue_login_button"
              onClick={this.loginForm}
            />
          </div>
          <div className="term_and_condition center">
            <small>
              By continuing you agree to our
              <span className="highlight"> Terms of Use</span> and acknowledge
              that you have read our
              <span className="highlight"> Privacy Policy</span>.
            </small>
          </div>
          <input
            type="number"
            id="otp"
            name="otp"
            placeholder="otp"
            style={{ visibility: "hidden" }}
          />
        </form>

        <form
          className="otp__container center"
          id="otp__container"
          style={{ display: "none" }}
          autoComplete="off"
          method="get"
          action="/register"
        >
          <div className="form_title">
            <span className="backArrow" onClick={this.backArrow}>
              &larr;
            </span>
            Validate OTP (One Time Passcode)
          </div>
          <div className="otpNumbers" id="form">
            <input
              type="number"
              name="phone"
              className="otpNum center"
              maxLength="1"
              autoComplete="off"
            />
            <input
              type="number"
              name="phone"
              className="otpNum center"
              maxLength="1"
              autoComplete="off"
            />
            <input
              type="number"
              name="phone"
              className="otpNum center"
              maxLength="1"
              autoComplete="off"
            />
            <input
              type="number"
              name="phone"
              className="otpNum center"
              maxLength="1"
              autoComplete="off"
            />
            <input
              type="number"
              name="phone"
              className="otpNum center"
              maxLength="1"
              autoComplete="off"
            />
          </div>
          <div className="submit_Login center">
            <input
              type="submit"
              value={this.state.status}
              id="Continue_otp_button"
              autoComplete="off"
              onClick={VerifyOTP}
            />
          </div>
          <input
            type="email"
            value={this.state.email}
            style={{ display: "none" }}
          />
          <Link
            to={"/UserForm"}
            id="internshipForm"
            style={{ display: "none" }}
          >
            redirect to user Form
          </Link>
          <div className="term_and_condition center">
            <small>
              A OTP has been sent to
              <span className="highlight" id="userEmail"></span>. Please enter
              the OTP in the above field to verify your phone.
            </small>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
