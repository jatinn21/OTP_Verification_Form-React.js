import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import UserForm from "./Components/UserForm.js";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";
import AdminProfile from "./Components/AdminProfile";
import AdminSelectedApplicants from "./Components/AdminSelectedApplicants";
import AdminSaveApplicants from "./Components/AdminSaveApplicants";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
        <Routes>
          <Route path="/UserForm" element={<UserForm />} />
        </Routes>
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
        <Routes>
          <Route path="/admin/admin-Dashboard" element={<AdminDashboard />} />
        </Routes>
        <Routes>
          <Route path="/admin/admin-Profile" element={<AdminProfile />} />
        </Routes>
        <Routes>
          <Route
            path="/admin/admin-Selected-Applicants"
            element={<AdminSelectedApplicants />}
          />
        </Routes>
        <Routes>
          <Route
            path="/admin/admin-Save-Applicants"
            element={<AdminSaveApplicants />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
