import React, { Component } from "react";
import "../Css/userForm.css";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobileNumber: "",
      address: "",
      DOB: "",
      gender: "",
      intro: "",
      resume: "",
      isLoggedIn: false,
    };
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleMobileNumber = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };

  handleAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  handleDOB = (event) => {
    this.setState({ DOB: event.target.value });
  };

  handleGender = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleIntro = (event) => {
    this.setState({ intro: event.target.value });
  };

  handleResume = (event) => {
    this.setState({ resume: event.target.value });
    document.querySelector(".custom_Input").style.display = "none";
    // document.querySelector(".resume-fileName").textContent = "hello brotehr";
    let filename = document.querySelector(".hidden-input").value;
    document.querySelector(".resume-fileName").textContent = filename;
    // console.log(filename);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    document.querySelector("#userFormSubmitted").click();
  };
  render() {
    return (
      <>
        <nav>
          <span> Jharkhand Space Applications Center </span>
        </nav>
        <section className="carourselParent">
          <div className="caroursel center">
            <p className="card">
              <span>Front-end Developer</span>
            </p>
            <p className="card">
              <span>Back-end Developer</span>
            </p>
            <p className="card">
              <span>Full Stack Developer</span>
            </p>
            <p className="card">
              <span>Mobile App Developer</span>
            </p>
            <p className="card">
              <span>Web Developer</span>
            </p>
            <p className="card">
              <span>UI/UX Designer</span>
            </p>
            <p className="card">
              <span>Content Creator</span>
            </p>
            <p className="card">
              <span>Photographer</span>
            </p>
          </div>
          <div className="caroursel center">
            <p className="card">
              <span>Front-end Developer</span>
            </p>
            <p className="card">
              <span>Back-end Developer</span>
            </p>
            <p className="card">
              <span>Full Stack Developer</span>
            </p>
            <p className="card">
              <span>Mobile App Developer</span>
            </p>
            <p className="card">
              <span>Web Developer</span>
            </p>
            <p className="card">
              <span>UI/UX Designer</span>
            </p>
            <p className="card">
              <span>Content Creator</span>
            </p>
            <p className="card">
              <span>Photographer</span>
            </p>
          </div>
        </section>
        <div className="caroursel__Title">Jobs Available</div>
        <section className="parentContainer center">
          <form className="userForm">
            <h1>Internship Form</h1>
            <div className="userField user__name">
              <label for="name">Name</label>
              <input
                autoFocus
                autoComplete="off"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Full Name"
                value={this.state.name}
                onChange={this.handleName}
              />
            </div>
            <div className="userField user__phoneNumber">
              <label for="name">Mobile Number</label>
              <input
                type="number"
                autoComplete="off"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Please enter a valid 10 digit phone number "
                value={this.state.mobileNumber}
                onChange={this.handleMobileNumber}
              />
            </div>
            <div className="userField user__address">
              <label for="name">Address</label>
              <textarea
                type="text"
                name="address"
                autoComplete="off"
                id="address"
                placeholder="Please enter your address"
                cols="5"
                rows="5"
                maxlength="100"
                wrap="hard"
                onChange={this.handleAddress}
              >
                {this.state.value}
              </textarea>
            </div>
            <div className="userField user__birthdate">
              <label for="name">Date of birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                autoComplete="off"
                value={this.state.DOB}
                onChange={this.handleDOB}
              />
            </div>
            <div className="userField user__gender">
              <label for="name">Gender</label>
              <select
                id="gender"
                name="gender"
                value={this.state.gender}
                onChange={this.handleGender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="userField user__intro">
              <label for="name">Tell us about Yourself</label>
              <textarea
                type="text"
                name="intro"
                id="intro"
                autoComplete="off"
                placeholder="Tell us about Yourself"
                cols="5"
                rows="15"
                maxlength="100"
                wrap="hard"
                onChange={this.handleIntro}
              >
                {this.state.intro}
              </textarea>
            </div>
            <input
              type="file"
              className="hidden-input"
              id="fileInput"
              value={this.state.resume}
              onChange={this.handleResume}
            />
            <div className="userField user__resume">
              <label for="resumeFile">Upload your resume</label>
              <p className="upload_resume center resume-fileName">
                <span
                  className="custom_Input"
                  onClick={() => {
                    document.querySelector(".hidden-input").click();
                  }}
                >
                  Click here
                </span>
                to select files
              </p>
            </div>

            <input
              type="submit"
              value="Submit"
              id="userForm_Submit_btn"
              onClick={this.handleSubmit}
              // onClick={
              //     // Redirect the user to another page once logged in
              // }
            />
          </form>
          <Link
            to={"/ThankYou"}
            id="userFormSubmitted"
            style={{ display: "none" }}
          >
            Bye
          </Link>
        </section>
      </>
    );
  }
}
export default UserForm;
