import React, { useState, useEffect } from "react";
import TableUsers from "./TableUsers";
import { useHistory } from "react-router-dom";

export default function AdminDashboard() {
  const history = useHistory();

  const [isAdmin, setisAdmin] = useState(localStorage.getItem("adminLogin"));
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("isAdmin", isAdmin);
    if (isAdmin == 0) {
      history.push(`/adminlogin`);
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem("adminLogin", 0);
    history.push("/adminlogin");
  };
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#c94c4c" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Survey Sys
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Admin Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Users
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Profile
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search user"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success"
                type="submit"
                style={{
                  backgroundColor: "#fff",
                  color: "#222",
                  marginRight: "10px",
                }}
              >
                Search
              </button>
              <button
                class="btn  btn-warning"
                type="button"
                onClick={handleLogout}
              >
                Logout{" "}
              </button>
            </form>
          </div>
        </div>
      </nav>

      <br></br>
      <div class="d-flex justify-content-evenly">
        <h3 class="text-center mt-5" style={{ color: " #c94c4c" }}>
          Welcome Admin
        </h3>
      </div>
      <br></br>
      <TableUsers />
    </div>
  );
}
