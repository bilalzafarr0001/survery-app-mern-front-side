import { Redirect, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginUser from "./components/LoginUser";
import RegisterUser from "./components/RegisterUser";
import Success from "./components/Success";
import LoginAdmin from "./components/LoginAdmin";
import AdminDashboard from "./components/AdminDashboard";
import ViewUserRecord from "./components/ViewUserRecord";

function App() {
  return (
    <div class="container-fluid">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginUser />} />
        <Route path="/iloginadmin" element={<LoginAdmin />} />
        <Route path="/register" element={<RegisterUser />} />

        <Route path="/success" element={<Success />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/users/:id" element={<ViewUserRecord />} />
      </Routes>
    </div>
  );
}
export default App;
