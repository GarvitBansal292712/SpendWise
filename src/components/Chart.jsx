import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export function LineGraph() {
  const { transactions } = useContext(TransactionContext);

  const incomeByMonth = transactions.reduce((acc, transaction) => {
    if (transaction.category === "income") {
      if (!acc[transaction.month]) {
        acc[transaction.month] = 0;
      }
      acc[transaction.month] += Number(transaction.amount);
    }
    return acc;
  }, {});

  const expenseByMonth = transactions.reduce((acc, transaction) => {
    if (transaction.category === "expense") {
      if (!acc[transaction.month]) {
        acc[transaction.month] = 0;
      }
      acc[transaction.month] += Number(transaction.amount);
    }
    return acc;
  }, {});

  const labels = [
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
  ];

  const currentMonthIndex = new Date().getMonth();
  const months = [
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
  ];

  const filteredLables = labels.filter((lable) => {
    const monthIndex = months.indexOf(lable);
    return monthIndex <= currentMonthIndex;
  });

  const incomeData = filteredLables.map((month) => incomeByMonth[month] || 0);
  const expenseData = filteredLables.map((month) => expenseByMonth[month] || 0);
  return {
    labels: labels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        borderColor: ["#31C48D"],
        backgroundColor: ["#31C48D"],
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: expenseData,
        borderColor: ["#F98080"],
        backgroundColor: ["#F98080"],
        tension: 0.4,
      },
    ],
  };
}

// DONUT CHART DATA STARTED

export function Data() {
  const { transactions } = useContext(TransactionContext);
  const expenseTransactions = transactions.filter(transaction => transaction.category === "expense");

  if (!Array.isArray(expenseTransactions) || expenseTransactions.length === 0) {
    return {
      labels: ["No data"],
      datasets: [
        {
          label: "No data",
          data: [1], // This will create a full circle in the donut chart
          backgroundColor: ["#cccccc"], // Placeholder color
        },
      ],
    };
  }

  const expenseByType = transactions.reduce((acc, transaction) => {
    if (transaction.category === "expense") {
      if (!acc[transaction.type]) {
        acc[transaction.type] = 0;
      }
      acc[transaction.type] += Number(transaction.amount);
    }
    return acc;
  }, {});

  const categories = [
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
  ];
  const data = categories.map((type) => expenseByType[type] || 0);

  return {
    labels: categories,
    datasets: [
      {
        label: "My Expense",
        data: data,
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
}
