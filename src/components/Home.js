import React, { useEffect } from "react";
import SurveyForm from "./SurveyForm";
import { useNavigate } from "react-router-dom";

export default function Home() {
  //const history = useHistory();
  let navigate = useNavigate();

  useEffect(() => {
    var accessTokenObj = localStorage.getItem("token");
    if (!accessTokenObj) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      {" "}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://www.pikpng.com/pngl/m/378-3788335_checklist-satisfaction-survey-icon-png-clipart.png"
              style={{ height: "70px", width: "90px", borderRadius: "60px" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <h4 class="nav-link active" aria-current="page" href="#">
                  Survey
                </h4>
              </li>
              <li class="nav-item">
                <a
                  style={{ fontWeight: "bold" }}
                  class="nav-link active"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              {localStorage.getItem("userInfo") ? (
                <li class="nav-item">
                  <a
                    style={{ fontWeight: "bold" }}
                    class="nav-link active"
                    aria-current="page"
                  >
                    {" "}
                    {JSON.parse(localStorage.getItem("userInfo")).username}
                  </a>
                </li>
              ) : null}
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search "
                placeholder="Search user"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-warning"
                style={{ backgroundColor: "#c94c4c", color: "#fff" }}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {localStorage.getItem("userInfo") ? <SurveyForm /> : null}
    </>
  );
}
