import { Redirect, Route, Switch as Swh } from "react-router-dom";
import Home from "./components/Home";
import LoginUser from "./components/LoginUser";
import RegisterUser from "./components/RegisterUser";
import Success from "./components/Success";
import LoginAdmin from "./components/LoginAdmin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <div class="container-fluid">
      <Swh>
        <Route exact path="/" component={Home} />
        <Route path="/adminlogin" component={LoginAdmin} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/login" component={LoginUser} />
        <Route path="/success" component={Success} />
        <Route path="/admindashboard" component={AdminDashboard} />
      </Swh>
    </div>
  );
}

export default App;
