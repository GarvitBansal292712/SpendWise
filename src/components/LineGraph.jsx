import { data } from "autoprefixer";
import React from "react";

export const LineGraph = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Earnings",
      data: [1200, 1900, 3000, 5000, 2000, 3000],
      borderColor: ["#c594ff"],
    },
  ],
};

export default LineGraph;
