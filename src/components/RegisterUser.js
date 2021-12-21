import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { client } from "../client";
import { useNavigate } from "react-router-dom";

export default function RegisterUser() {
  //const history = useHistory();
  let navigate = useNavigate();

  return (
    <div class="container ">
      <div class="row  ">
        <div class="col">
          {" "}
          <img
            src="https://www.clipartkey.com/mpngs/m/158-1580691_feedback-survey-icon-png.png"
            style={{ height: "30rem", width: "30rem" }}
          />
        </div>
        <div class="col">
          <br></br>
          <br></br>
          <h2 style={{ color: " #c94c4c" }}>Survey Application!</h2>
          <h4 style={{ fontWeight: "bold", color: "#f7786b" }}>
            Enter Login Crendentials
          </h4>
          <br></br>
          <Formik
            initialValues={{
              email: "",
              password: "",
              username: "",
              gender: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is Required";
              }
              if (!values.password) {
                errors.password = "Password isRequired";
              }
              if (!values.username) {
                errors.name = "Username is Required";
              }
              if (!values.gender) {
                errors.gender = "Please select Gender";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("Values are ", values);
              try {
                await client("/signup", {
                  values,
                }).then((res) => {
                  console.log("User Register date responce is :", res);
                  localStorage.setItem("token", res.token);
                  localStorage.setItem(
                    "userInfo",
                    JSON.stringify(res.userInfo)
                  );
                });
              } catch (err) {
                console.log("error", err);
              }
              // history.push(`/`);
              navigate("/");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    UserName
                  </label>{" "}
                  <input
                    class="form-control"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username && errors.username}
                </div>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>{" "}
                  <input
                    class="form-control"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </div>
                <br></br>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Gender
                  </label>{" "}
                  <select
                    class="form-select"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="Select a color" />
                    <option value="Male" label="male" />
                    <option value="Female" label="female" />
                  </select>
                  {errors.gender && touched.gender && errors.gender}
                </div>
                <br></br>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Password
                  </label>
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                {errors.password && touched.password && errors.password}
                <br></br>
                <button
                  type="submit"
                  class="btn btn-warning"
                  style={{ backgroundColor: "#c94c4c", color: "#fff" }}
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
          <br></br>
          <br></br>
          <div class="d-flex">
            <p>If already Account </p>
            <Link to="/login"> {"    "}Login</Link>
            <p>here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
