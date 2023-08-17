import React, { Component } from "react";
import "../Css/adminDashboard.css";
import Admin_Sidebar from "../Components/AdminSidebar";
class AdminDashboard extends Component {
  render() {
    return (
      <div className="adminDashboard_body">
        <Admin_Sidebar />
        <div className="admin__mainBody">
          <section className="numberCards top_part">
            <p className="numberCard center">
              <span className="card_number center">240+</span>
              <span className="card_title center">Applications</span>
            </p>
            <p className="numberCard center">
              <span className="card_number center">110</span>
              <span className="card_title center">Selected</span>
            </p>
            <p className="numberCard center">
              <span className="card_number center">24</span>
              <span className="card_title center">Job Roles</span>
            </p>
          </section>
          <section className="applicantCards bottom_part ">
            <input
              type="search"
              className="searchbar"
              placeholder="Search by job role, name, or email"
              maxLength={25}
            />
            <div className="applicant_card_container">
              <p className="applicant_card center">
                <span
                  className="applicant_profilePicture"
                  style={{
                    backgroundImage:
                      'url("https://as1.ftcdn.net/v2/jpg/06/22/28/62/1000_F_622286256_l15QkCPfznkmwzgfNBo60pSrLnNnM6HZ.webp")',
                  }}
                ></span>
                <span className="name">Jatin Sharma</span>
                <span className="jobrole">Web Designer</span>
                <span className="email">thisisjatinn@gmail.com</span>
              </p>
              <p className="applicant_card center">
                <span
                  className="applicant_profilePicture"
                  style={{
                    backgroundImage:
                      'url("https://as1.ftcdn.net/v2/jpg/06/22/28/62/1000_F_622286256_l15QkCPfznkmwzgfNBo60pSrLnNnM6HZ.webp")',
                  }}
                ></span>
                <span className="name">Badal Chhipa</span>
                <span className="jobrole">Frontend developer</span>
                <span className="email">Badalchhipa@gmail.com</span>
              </p>
              <p className="applicant_card center">
                <span
                  className="applicant_profilePicture"
                  style={{
                    backgroundImage:
                      'url("https://as1.ftcdn.net/v2/jpg/06/22/28/62/1000_F_622286256_l15QkCPfznkmwzgfNBo60pSrLnNnM6HZ.webp")',
                  }}
                ></span>
                <span className="name">Chirag Paliwal</span>
                <span className="jobrole">Fullstack developer</span>
                <span className="email">Cp147@gmail.com</span>
              </p>
              <p className="applicant_card center">
                <span
                  className="applicant_profilePicture"
                  style={{
                    backgroundImage:
                      'url("https://as1.ftcdn.net/v2/jpg/06/22/28/62/1000_F_622286256_l15QkCPfznkmwzgfNBo60pSrLnNnM6HZ.webp")',
                  }}
                ></span>
                <span className="name">Shivam Chodary</span>
                <span className="jobrole">Data Analyst</span>
                <span className="email">vampi@gmail.com</span>
              </p>
              <p className="applicant_card center">
                <span
                  className="applicant_profilePicture"
                  style={{
                    backgroundImage:
                      'url("https://as1.ftcdn.net/v2/jpg/06/22/28/62/1000_F_622286256_l15QkCPfznkmwzgfNBo60pSrLnNnM6HZ.webp")',
                  }}
                ></span>
                <span className="name">Ram Sharma</span>
                <span className="jobrole">UI/Ux Designer</span>
                <span className="email">ram8382@gmail.com</span>
              </p>
              <p className="applicant_card center">
                <span
                  className="applicant_profilePicture"
                  style={{
                    backgroundImage:
                      'url("https://as1.ftcdn.net/v2/jpg/06/22/28/62/1000_F_622286256_l15QkCPfznkmwzgfNBo60pSrLnNnM6HZ.webp")',
                  }}
                ></span>
                <span className="name">Shish Mishra</span>
                <span className="jobrole">Photographer</span>
                <span className="email">whoknowsShesh@gmail.com</span>
              </p>
              <p className="applicant_card center">
                <span
                  className="applicant_profilePicture"
                  style={{
                    backgroundImage:
                      'url("https://as1.ftcdn.net/v2/jpg/06/22/28/62/1000_F_622286256_l15QkCPfznkmwzgfNBo60pSrLnNnM6HZ.webp")',
                  }}
                ></span>
                <span className="name">Jayesh Chandak</span>
                <span className="jobrole">Web Designer</span>
                <span className="email">WeedBoy@gmail.com</span>
              </p>
              <p className="applicant_card center">
                <span
                  className="applicant_profilePicture"
                  style={{
                    backgroundImage:
                      'url("https://as1.ftcdn.net/v2/jpg/06/22/28/62/1000_F_622286256_l15QkCPfznkmwzgfNBo60pSrLnNnM6HZ.webp")',
                  }}
                ></span>
                <span className="name">Rohit mandal</span>
                <span className="jobrole">React Designer</span>
                <span className="email">mandalraj@gmail.com</span>
              </p>
              <p className="applicant_card center">
                <span
                  className="applicant_profilePicture"
                  style={{
                    backgroundImage:
                      'url("https://as1.ftcdn.net/v2/jpg/06/22/28/62/1000_F_622286256_l15QkCPfznkmwzgfNBo60pSrLnNnM6HZ.webp")',
                  }}
                ></span>
                <span className="name">Pratham velewala</span>
                <span className="jobrole">Database administrator</span>
                <span className="email">kalubolte@gmail.com</span>
              </p>
              <p className="applicant_card center">
                <span
                  className="applicant_profilePicture"
                  style={{
                    backgroundImage:
                      'url("https://as1.ftcdn.net/v2/jpg/06/22/28/62/1000_F_622286256_l15QkCPfznkmwzgfNBo60pSrLnNnM6HZ.webp")',
                  }}
                ></span>
                <span className="name">Vaishnavi bholane</span>
                <span className="jobrole">Java developer</span>
                <span className="email">tragic_Maggie@gmail.com</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
