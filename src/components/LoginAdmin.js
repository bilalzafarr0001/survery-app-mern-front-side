import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { client } from "../client";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginAdmin() {
  const history = useHistory();
  const [isAdmin, setisAdmin] = useState(localStorage.getItem("adminLogin"));

  useEffect(() => {
    console.log("isAdmin", isAdmin);
    if (isAdmin == 1) {
      history.push(`/admindashboard`);
    }
  }, []);
  return (
    <div class="container ">
      <div class="row  ">
        <div class="col">
          {" "}
          <img
            src="https://mpng.subpng.com/20201105/acz/transparent-user-avatar-with-check-mark-icon-admin-icon-techno-5fa3dfde0d4828.3236824716045751980544.jpg"
            style={{ width: "400px", height: "400px", borderRadius: "505" }}
          />
        </div>
        <div class="col">
          <br></br>
          <br></br>
          <h2 style={{ color: " #c94c4c" }}>ADMIN LOGIN</h2>
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
                await client("/adminlogin", {
                  values,
                }).then((res) => {
                  console.log("User Login data is :", res);

                  localStorage.setItem("adminLogin", 1);

                  history.push(`/admindashboard`);
                });
              } catch (err) {
                console.log("error", err);

                toast.error(err.message, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
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
                  Login
                </button>
              </form>
            )}
          </Formik>
          <br></br>
          <br></br>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
}
