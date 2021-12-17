import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { client } from "../client";
import { useHistory } from "react-router-dom";

export default function LoginUser() {
  const history = useHistory();

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
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (!values.password) {
                errors.password = "Required";
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
                await client("/authenticate", {
                  values,
                }).then((res) => {
                  console.log("User Login date responce is :", res);
                  localStorage.setItem("token", res.token);
                  localStorage.setItem(
                    "userInfo",
                    JSON.stringify(res.userInfo)
                  );
                  history.push(`/`);
                });
              } catch (err) {
                console.log("error", err);
              }

              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);
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
            <p>If don't have any Account </p>
            <Link to="/register"> {"    "}Register</Link>
            <p>here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
