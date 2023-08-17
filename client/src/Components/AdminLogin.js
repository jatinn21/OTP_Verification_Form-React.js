import React, { Component } from "react";
import "../Css/AdminLogin.css";
import { Link } from "react-router-dom";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin__Input__email: "",
      admin__Input__password: "",
      admin_LoggedIn: "",
    };
  }

  handleEmail = (event) => {
    this.setState({ admin__Input__email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ admin__Input__password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const email = "js650555@gmail.com";
    const password = "admin123";
    if (
      document.querySelector("#admin_email").value == email &&
      document.querySelector("#admin_password").value == password
    ) {
      window.alert("Welcome Admin\nYou are navigating to Admin Dashboard...");
      document.querySelector("#adminCorrectDetails").click();
    } else {
      window.alert("Wrong Credentials");
      this.admin__Input__email = this.admin__Input__password = "";
    }
  };

  render() {
    return (
      <div className="admin_body">
        <div className="admin_login_section">
          <form className="admin_form">
            <h1>Admin Login</h1>
            <input
              type="email"
              id="admin_email"
              name="admin_email"
              className="admin__field"
              autoComplete="off"
              placeholder="Enter your Email"
              onChange={this.handleEmail}
              value={this.admin_email}
              required
            />
            <input
              type="password"
              id="admin_password"
              name="admin_password"
              autoComplete="off"
              className="admin__field"
              placeholder="Enter your Password"
              onChange={this.handlePassword}
              value={this.admin_password}
              required
            />
            <input
              type="submit"
              className="admin_form_submit_btn"
              onClick={this.handleSubmit}
            />
          </form>

          <Link
            to={"/adminDashboard"}
            id="adminCorrectDetails"
            style={{ display: "none" }}
          >
            Bye
          </Link>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
