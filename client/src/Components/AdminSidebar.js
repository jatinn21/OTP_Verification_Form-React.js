import "../Css/adminDashboard.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class AdminSidebar extends Component {
  render() {
    return (
      <div className="sideBar">
        <section className="profilePicture center">
          <span className="admin__picture"></span>
          <span className="admin__greeting">Zayn Malik</span>
        </section>
        <section className="links">
          <p className="link">
            <Link className="linkTag center" to={"/admin/admin-Dashboard"}>
              <span className="linkText dashboard__link">Dashboard</span>
              <span className="material-symbols-outlined">dashboard</span>
            </Link>
          </p>
          <p className="link">
            <Link className="linkTag center" to={"/admin/admin-Profile"}>
              <span className="linkText profile__link">Profile</span>
              <span className="material-symbols-outlined">badge</span>
            </Link>
          </p>
          <p className="link applicants__link">
            <Link
              className="linkTag center"
              to={"/admin/admin-Selected-Applicants"}
            >
              <span className="linkText">Selected Applicants</span>
              <span className="material-symbols-outlined">groups_2</span>
            </Link>
          </p>
          <p className="link logout__link center">
            <span className="linkText">Logout</span>
            <span className="material-symbols-outlined">logout</span>
          </p>
        </section>
      </div>
    );
  }
}

export default AdminSidebar;
