import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import UserForm from "./Components/UserForm.js";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";
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
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
