import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { client } from "../client";

export default function ViewUserRecord() {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      client(`/survey/${id}`, {}).then((res) => {
        console.log(res.survey);
        setUser(res.survey);
      });
    } catch (err) {
      console.log("error", err);
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem("adminLogin", 0);
    history.push("/adminlogin");
  };

  return (
    <div class="">
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
      <div class="row  ">
        <div class="col">
          <div class="card" style={{ width: "50rem" }}>
            <div class="card-body">
              <h5 class="card-title">User Record </h5>
              <h5 class="card-title">Record ID : {user?._id} </h5>
              <p class="card-text">Survey Record of {user?.user.username}</p>
              <p class="card-text">
                <small class="text-muted">{user?.created}</small>
              </p>
            </div>
            <img
              src="https://previews.123rf.com/images/lembergvector/lembergvector2001/lembergvector200100043/136976497-online-survey-isometric-vector-illustration-filling-questionnaire-choosing-option-on-website-gatheri.jpg"
              class="card-img-bottom"
              style={{ width: "30rem", height: "27rem" }}
            />
          </div>
        </div>
        <div class="col">
          <ul class="list-group">
            <li
              style={{ fontWeight: "bold" }}
              class="list-group-item list-group-item-success"
            >
              User Detail ID : {user?.user._id}
            </li>
            <li
              style={{ height: "10%" }}
              class="list-group-item list-group-item-danger"
            >
              UserName : {user?.user.username}
            </li>{" "}
            <li
              style={{ height: "10%" }}
              class="list-group-item list-group-item-info"
            >
              Gender : {user?.user.gender}
            </li>{" "}
            <li
              style={{ height: "10%" }}
              class="list-group-item list-group-item-info"
            >
              E-mail : {user?.user.email}
            </li>{" "}
            <li
              style={{ height: "10%" }}
              class="list-group-item list-group-item-info"
            >
              Technology Stack : {user?.techstack}
            </li>{" "}
            <li
              style={{ height: "10%" }}
              class="list-group-item list-group-item-info"
            >
              Designation :{user?.designation}
            </li>{" "}
            <li
              style={{ height: "10%" }}
              class="list-group-item list-group-item-info"
            >
              Country : {user?.country}
            </li>{" "}
            <li
              style={{ height: "10%" }}
              class="list-group-item list-group-item-info"
            >
              Age : {user?.age}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
