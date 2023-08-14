import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import UserForm from "./Components/UserForm.js";
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
        ;
      </BrowserRouter>
    </>
  );
}

export default App;
