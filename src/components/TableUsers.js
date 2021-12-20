import React, { useState, useEffect } from "react";
import { client, clientDelete } from "../client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import SearchField from "react-search-field";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TableUsers() {
  const [users, setUsers] = useState([]);
  const [input1, setInput1] = useState("");

  useEffect(() => {
    try {
      client("/surveys/sqa", {}).then((res) => {
        console.log("SQA Responses are  are :", res.counter);
        localStorage.setItem("sqa", res.counter);
      });
    } catch (err) {}

    try {
      client("/surveys/mern", {}).then((res) => {
        console.log("MERN Responses are  are :", res.counter);

        localStorage.setItem("mern", res.counter);
      });
    } catch (err) {}

    try {
      client("/surveys/mean", {}).then((res) => {
        console.log("MEAN Responses are  are :", res.counter);

        localStorage.setItem("mean", res.counter);
      });
    } catch (err) {}

    try {
      client("/surveys/mven", {}).then((res) => {
        console.log("MVEN Responses are  are :", res.counter);

        localStorage.setItem("mven", res.counter);
      });
    } catch (err) {}

    try {
      client("/surveys", {}).then((res) => {
        console.log("User Tables are :", res.surveys);
        setUsers(res.surveys);
      });
    } catch (err) {
      console.log("error", err);
    }
  }, []);

  const data = {
    labels: ["SQA", "MERN", "MEAN", "MVEN"],

    datasets: [
      {
        label: "# of Votes",
        data: [
          localStorage.getItem("sqa"),
          localStorage.getItem("mern"),
          localStorage.getItem("mean"),
          localStorage.getItem("mven"),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const handleDelete = (id) => {
    console.log("handle delete");
    try {
      clientDelete(`/surveys/${id}`, {}).then((res) => {
        console.log("User deleted responce  are :", res.message);
        toast.success(res.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.reload();
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleChange = (e) => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = users;
      newList = currentList.filter((item) => {
        const lc = item.user.username.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = users;
    }
    setUsers(newList);
  };
  return (
    <div class="container">
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

      <input placeholder="Search for..." onChange={handleChange} />
      <br></br>
      <table class="table table-danger">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Designation</th>
            <th scope="col">TechStack</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Country</th>
            <th scope="col">User Record</th>
            <th scope="col">Delete User Record</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i}</th>
                <td>{user.user.username}</td>
                <td>{user.user.email}</td>
                <td>{user.designation}</td>
                <td>{user.techstack}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.country}</td>
                <td>
                  <Link to={`/users/${user._id}`}>
                    <button type="button" class="btn btn-success">
                      Show
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          width: "50%",
          margin: "4rem auto",
        }}
      >
        <Pie data={data} />
      </div>
    </div>
  );
}
