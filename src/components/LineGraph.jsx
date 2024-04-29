// import { data } from "autoprefixer";
import { color } from "chart.js/helpers";
import React from "react";

export const LineGraph = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Earnings",
      data: [1200, 1900, 3000, 5000, 2000, 3000,3500],
      borderColor: ["#c594ff"],
      tension: 0.4,
    },
    {
      label: "Expenses",
      data: [200, 3900, 3100, 8000, 1900, 3500, 4000],
      borderColor: ["#000000"],
      color:["#000000"],
      tension: 0.4,
    }, 
  ],
};

export const Data = {
  labels: [
    'Red',
    'Blue',
    'Yellow',
    'Red',
    'Blue',
    'Yellow',
    'Red',
    'Blue',
    'Yellow',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132, 0.8)',
      'rgb(54, 162, 235, 0.8)',
      'rgb(255, 205, 86, 0.8)'
    ],
    hoverOffset: 4,
    borderWidth: 0, // Add this line

  }]
};

