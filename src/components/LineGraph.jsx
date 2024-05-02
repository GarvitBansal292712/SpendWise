// import { data } from "autoprefixer";
import { color } from "chart.js/helpers";
import React from "react";
// const transactions = [
//   { month: "January", amount: 1200, type: "Income" },
//   { month: "January", amount: 500, type: "Income" },
//   { month: "February", amount: 1900, type: "Income" },
//   { month: "December", amount: 1900, type: "Income" },
//   // Add more transactions here
// ];
// const incomeByMonth = transactions.reduce((acc, transaction) => {
//   if (transaction.type === "Income") {
//     if (!acc[transaction.month]) {
//       acc[transaction.month] = 0;
//     }
//     acc[transaction.month] += transaction.amount;
//   }
//   return acc;
// }, {});
// const labels= [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ]
// const incomeData = labels.map((month) => incomeByMonth[month] || 0);
export const LineGraph = {
  labels:  [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  datasets: [
    {
      label: "Income",
      data: [1000,5000],
      borderColor: ["#31C48D"],
      backgroundColor: ["#31C48D"],
      tension: 0.4,
    },
    {
      label: "Expenses",
      data: [200, 3900, 3100, 8000, 1900, 3500, 4000],
      borderColor: ["#F98080"],
      backgroundColor: ["#F98080"],
      tension: 0.4,
    },
  ],
};

export const Data = {
  labels: [
    "Groceries",
    "Transportation",
    "Utilities",
    "Dining Out",
    "Entertainment",
    "Healthcare",
    "Housing",
    "Clothing and Accessories",
    "Education",
    "Miscellaneous",
  ],
  datasets: [
    {
      label: "My Expense",
      data: [300, 50, 100, 200, 150, 250, 300, 350, 190, 220],
      backgroundColor: [
        "rgb(63, 81, 181, 0.8)", // Groceries (Blue)
        "rgb(255, 152, 0, 0.8)", // Transportation (Orange)
        "rgb(0, 150, 136, 0.8)", // Utilities (Teal)
        "rgb(244, 67, 54, 0.8)", // Dining Out (Red)
        "rgb(156, 39, 176, 0.8)", // Entertainment (Purple)
        "rgb(33, 150, 243, 0.8)", // Healthcare (Blue)
        "rgb(255, 87, 34, 0.8)", // Clothing and Accessories (Deep Orange)
        "rgb(0, 188, 212, 0.8)", // Housing (Cyan)
        "rgb(255, 193, 7, 0.8)", // Education (Amber)
        "rgb(76, 175, 80, 0.8)", // Miscellaneous (Green)
      ],
      hoverOffset: 4,
      borderWidth: 0, // Add this line
    },
  ],
};
