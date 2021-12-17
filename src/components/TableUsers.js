import React, { useState, useEffect } from "react";
import { client } from "../client";

export default function TableUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      client("/surveys", {}).then((res) => {
        console.log("User Tables are :", res.surveys);
        setUsers(res.surveys);
      });
    } catch (err) {
      console.log("error", err);
    }
  }, []);
  return (
    <div class="container">
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
                <td>{user.email}</td>
                <td>{user.designation}</td>
                <td>{user.techstack}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.country}</td>
                <td>
                  <button type="button" class="btn btn-success">
                    Show
                  </button>
                </td>
                <td>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
