import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { client } from "../client";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SurveyForm() {
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
          <h2 style={{ color: " #c94c4c" }}>Survey Form!</h2>
          <h4 style={{ fontWeight: "bold", color: "#f7786b" }}>
            Enter Form Crendentials
          </h4>
          <br></br>
          <Formik
            initialValues={{
              designation: "",
              techstack: "",
              age: "",
              gender: "",
              country: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.designation) {
                errors.designation = "Designation is Required";
              }
              if (!values.techstack) {
                errors.techstack = "TechStack isRequired";
              }
              if (!values.gender) {
                errors.gender = "Gender isRequired";
              }
              if (!values.age) {
                errors.age = "Age is Required.";
              }
              if (!values.country) {
                errors.country = "Country is Required.";
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("Values are ", values);
              try {
                await client("/surveys", {
                  values,
                }).then((res) => {
                  console.log("User Surveys date responce is :", res.survey);
                  toast.success("Survey Added Successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
              } catch (err) {
                console.log("error", err);
              }
              history.push(`/success`);
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
                    Designation
                  </label>{" "}
                  <select
                    class="form-select"
                    name="designation"
                    value={values.designation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="Select a Designation" />
                    <option value="Intern" label="Intern" />
                    <option
                      value="Associate Software Engineer"
                      label="Assaciate Software"
                    />
                    <option value="Software Engineer" label="Software" />
                    <option value="Software Quality Engineer" label="SQA" />
                  </select>
                  {errors.designation &&
                    touched.designation &&
                    errors.designation}
                </div>
                <br></br>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Gender
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="gender"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                    placeholder={
                      JSON.parse(localStorage.getItem("userInfo")).gender
                    }
                  />
                </div>{" "}
                {errors.gender && touched.gender && errors.gender}
                <br></br>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    TechSatck
                  </label>{" "}
                  <select
                    class="form-select"
                    name="techstack"
                    value={values.techstack}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="Select a Technology Stack" />
                    <option value="MERN" label="Mern" />
                    <option value="MEAN" label="Mean" />
                    <option value="MVEN" label="Mven" />

                    <option value="UNIT" label="Unit Testing " />
                  </select>
                  {errors.techstack && touched.techstack && errors.techstack}
                </div>
                <br></br>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Age
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    name="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                  />
                </div>
                {errors.age && touched.age && errors.age}
                <br></br>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Country
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                  />
                </div>
                {errors.country && touched.country && errors.country}
                <br></br>
                <button
                  type="submit"
                  class="btn btn-warning"
                  style={{ backgroundColor: "#c94c4c", color: "#fff" }}
                  disabled={isSubmitting}
                >
                  Submit Form
                </button>
              </form>
            )}
          </Formik>
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
          {/* Same as */}
          <ToastContainer />
          <br></br>
        </div>
      </div>
    </div>
  );
}
