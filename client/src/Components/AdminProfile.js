import React, { Component } from "react";
import Admin_Sidebar from "../Components/AdminSidebar";
import "../Css/adminDashboard.css";

class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin__name: "Zayn Malik",
      admin__email: "zaynmalik@gmail.com",
      admin__new__name: "",
      admin__new__email: "",
      admin__new__password: "",
      admin__new__profilePic: "",
    };
  }

  handleAdminNameInput = (event) => {
    this.setState({ admin__new__name: event.target.value });
  };
  handleAdminPasswordInput = (event) => {
    this.setState({ admin__new__password: event.target.value });
  };
  handleAdminEmailInput = (event) => {
    this.setState({ admin__new__email: event.target.value });
  };
  // handleAdminProfileInput = (event) => {
  //   this.setState({ admin__new__profilePic: event.target.value });
  // };

  handleAdminFormSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Name : ${this.state.admin__new__name}\nEmail : ${this.state.admin__new__email}\nPassword : ${this.state.admin__new__password}`
    );
  };

  HandleAdminProfilePic = (event) => {
    const h1 = document
      .querySelector("#hidden_input_profile")
      .value.split(`\\`);

    console.log(h1[h1.length - 1]);
    const FileName = h1[h1.length - 1];

    this.setState({
      admin__new__profilePic: document.querySelector("#hidden_input_profile")
        .value,
    });

    document.querySelector("#custom_profile_input_btn").textContent = FileName;
  };

  render() {
    return (
      <div className="adminDashboard_body">
        <Admin_Sidebar />
        <div className="adminProfile_main">
          <div className="adminPages_top center">
            <h1 className="admin_page_title">My Profile</h1>
            <span
              className="material-symbols-outlined"
              style={{ fill: "1", color: "white", fontSize: "3rem" }}
            >
              badge
            </span>
          </div>
          <div className="adminPages_bottom center">
            <form className="admin_profile_form center">
              <p
                className="admin_profile_form_field"
                style={{ flexDirection: "row" }}
              >
                <label className="admin_profile_form_label admin_profilepicture_field"></label>
                <span className="admin_profilepicture_field_inputField center">
                  <input
                    type="file"
                    name="hidden_input_profile"
                    id="hidden_input_profile"
                    onChange={this.HandleAdminProfilePic}
                  />
                  <span
                    className="custom_profile_input_btn"
                    id="custom_profile_input_btn"
                    onClick={() =>
                      document.querySelector("#hidden_input_profile").click()
                    }
                  >
                    Change Profile Picture
                  </span>
                </span>
              </p>
              <p className="admin_profile_form_field">
                <label className="admin_profile_form_label">Name</label>
                <input
                  type="text"
                  className="admin_form_inputs"
                  name="admin__new__name"
                  placeholder={this.state.admin__name}
                  onChange={this.handleAdminNameInput}
                  value={this.state.admin__new__name}
                />
              </p>
              <p className="admin_profile_form_field">
                <label className="admin_profile_form_label">Email</label>
                <input
                  type="email"
                  className="admin_form_inputs"
                  name="admin__new__email"
                  placeholder={this.state.admin__email}
                  onChange={this.handleAdminEmailInput}
                  value={this.state.admin__new__email}
                />
              </p>
              <p className="admin_profile_form_field">
                <label className="admin_profile_form_label">
                  Change Password (If you want)
                </label>
                <input
                  type="password"
                  className="admin_form_inputs"
                  placeholder="New Password"
                  name="admin__new__password"
                  onChange={this.handleAdminPasswordInput}
                  value={this.state.admin__new__password}
                />
              </p>
              <input
                type="submit"
                value="Update Profile"
                className="admin_profile_form_submit_btn"
                id="admin_profile_form_submit_btn"
                onClick={this.handleAdminFormSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProfile;
