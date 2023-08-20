import React, { Component } from "react";
import "../Css/adminDashboard.css";
import Admin_Sidebar from "../Components/AdminSidebar";
class AdminDashboard extends Component {
  showApplication = (event) => {
    console.log(event.currentTarget.id);
    document.querySelector(".viewApplication__Form").style.opacity = "1";
    document.querySelector(".viewApplication__Form").style.visibility =
      "visible";
  };
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
              <p
                className="applicant_card center"
                id="Application504"
                onClick={this.showApplication}
              >
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

        {
          // Here the Application Form that will be opened
        }
        <section className="viewApplication__Form">
          <span
            className="cross"
            onClick={() => {
              document.querySelector(".viewApplication__Form").style.opacity =
                "0";
              document.querySelector(
                ".viewApplication__Form"
              ).style.visibility = "hidden";
            }}
          >
            ✗
          </span>
          <div className="application_topPart">
            <p className="applicant_Name_Job center">
              <span>
                <span className="applicant_Name">Zayn Malik →</span>
              </span>
              <span>
                <span className="applicant_Role">Web Developer</span>
              </span>
            </p>
            <p className="applicant_Profile_Container center">
              <span className="applicant_Profile"></span>
              <span className="applicant_Email">ZaynMalik@gmail.com</span>
            </p>
            <p className="applicant_Address center">
              <address>
                F-607, Vatika Town Ship, Parvat Patia, Surat Gujarat, 395010
              </address>
            </p>
          </div>
          <div className="application_bottomPart">
            <p className="application_About_Container">
              <div className="Applicantion_introduction_Field">
                <span className="Applicant_intro_title">Introduction</span>
                <span className="Applicant_intro">
                  I'm a Web developer skilled in HTML, CSS, and JavaScript. I
                  build user-friendly websites, focusing on responsive design
                  and seamless mobile experiences. I'm proficient in frameworks
                  like React and Vue.js, translating designs into interactive
                  interfaces while collaborating with designers and backend
                  developers. My goal is to create visually appealing,
                  high-performance web applications that users love to engage
                  with.
                </span>
              </div>
              <div className="Applicantion_BasicDetails_Field">
                <span className="Applicant_Basic_title">Basic Details</span>
                <div className="Basic_details">
                  <p className="BasicField">
                    <span className="field_Title gender_title">Gender</span>
                    <span>:</span>
                    <span className="basic_Info applicant_gender">Male</span>
                  </p>
                  <p className="BasicField">
                    <span className="field_Title gender_title">
                      Date of Birth
                    </span>
                    <span>:</span>

                    <span className="basic_Info applicant_gender">
                      21/11/2001
                    </span>
                  </p>
                  <p className="BasicField">
                    <span className="field_Title gender_title">
                      Mobile number
                    </span>
                    <span>:</span>
                    <span className="basic_Info applicant_gender">
                      1234567899
                    </span>
                  </p>
                </div>
              </div>
            </p>
            <footer className="Application_footer center">
              <p className="ResumeBtn footerBtn">Resume</p>
              <p className="CandidateStatus">
                <span className="star_applicant_btn footerBtn">★ Save</span>
                <span className="selected_applicant_btn footerBtn">
                  ✔ Selected
                </span>
                <span className="unselected_applicant_btn footerBtn">
                  ✖ unselected
                </span>
              </p>
            </footer>
          </div>
        </section>
      </div>
    );
  }
}

export default AdminDashboard;
