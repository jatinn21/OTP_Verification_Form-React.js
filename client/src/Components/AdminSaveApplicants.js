import React, { Component } from "react";
import Admin_Sidebar from "../Components/AdminSidebar";
import "../Css/adminDashboard.css";

class AdminSelectedApplicants extends Component {
  render() {
    return (
      <div className="adminDashboard_body">
        <Admin_Sidebar />
      </div>
    );
  }
}

export default AdminSelectedApplicants;
