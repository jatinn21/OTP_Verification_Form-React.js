import React, { Component } from "react";
import "../Css/adminDashboard.css";

class AdminDashboard extends Component {
  render() {
    return (
      <div className="adminDashboard_body">
        <div className="sideBar">
          <span className="profilePicture link"></span>
          <span className="link">Dashboard</span>
          <span className="link">Profile</span>
          <span className="link">Add Admin</span>
          <span className="link">Add Applications</span>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
