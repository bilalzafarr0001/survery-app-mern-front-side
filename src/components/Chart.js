// import React, { useState, useEffect } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ["SQA", "MERN", "MEAN", "MVEN"],

//   datasets: [
//     {
//       label: "# of Votes",
//       data: [
//         localStorage.getItem("sqa"),
//         localStorage.getItem("mern"),
//         localStorage.getItem("mean"),
//         localStorage.getItem("mven"),
//       ],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//       ],
//       borderWidth: 2,
//     },
//   ],
// };

// export default function Chart() {
//   return (
//     <div
//       style={{
//         width: "50%",
//         margin: "4rem auto",
//       }}
//     >
//       <Pie data={data} />
//     </div>
//   );
// }
