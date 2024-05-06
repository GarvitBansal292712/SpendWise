import React from "react";
import { useContext } from "react";
import { Chart, Doughnut } from "react-chartjs-2";
import { TransactionContext } from "../context/TransactionContext";
import { LineGraph, Data } from "../components/Chart";
import {
  Chart as ChartJS,
  LineController,
  CategoryScale,
  ArcElement,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  LineController,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
/* #c594ffPurple */
/* #c594ff black */
/* #1cdbcb  Neon */

const Dashboard = () => {
  const { transactions } = useContext(TransactionContext);
  const lineGraphData = LineGraph(transactions);
  const pieGraphData = Data(transactions);
  const totalIncome = transactions.reduce((acc, transaction) => {
    if (transaction.category === "income") {
      return acc + Number(transaction.amount);
    }
    return acc;
  }, 0);
  const totalExpense = transactions.reduce((acc, transaction) => {
    if (transaction.category === "expense") {
      return acc + Number(transaction.amount);
    }
    return acc;
  }, 0);

  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: true },
      title: {
        display: true,
        text: "Monthly Income and Expense Data", // Add your title here
        font: {
          size: 20, // Adjust as needed
        }
      },
      legend: {
        labels: {
          color: "black",
          font: {
            size: 14,
            family: "Montserrat",
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.9)",
        },
        ticks: {
          color: "black",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.9)",
        },
        ticks: {
          color: "black",
        },
      },
    },
  };
  const pieoptions = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: true },
      title: {
        display: true,
        text: "Monthly Expense Data", // Add your title here
        font: {
          size: 20, // Adjust as needed
        },
      },
      legend: {
        position: "right", // Add this line
        align: "center", // Add this line
        labels: {
          color: "black",
          font: {
            size: 14,
            family: "Montserrat",
          },
        },
      },
    },
  };
  return (
    <>
      <div className="md:ml-[256px] flex justify-center items-center flex-col">
        <div className="flex justify-evenly mt-20 gap-4 flex-wrap ">
          <div className="bg-[#ffffff] p-3 rounded-xl w-[100px] md:w-[200px] text-center shadow-md">
            <h1 className="text-lg md:text-xl text-green-400">
            ₹{totalIncome}
            </h1>
            <h1 className="text-green-400 text-center">Income</h1>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl w-[100px] md:w-[200px] text-center shadow-md">
            <h1 className="text-lg md:text-xl text-red-400">₹{totalExpense}</h1>
            <h1 className="text-red-400 text-center">Expenses</h1>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl w-[100px] md:w-[200px] text-center shadow-md">
            <h1 className="text-lg md:text-xl text-blue-400">
            ₹{totalIncome - totalExpense}
            </h1>
            <h1 className="text-blue-400 text-center">Balance</h1>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl w-[200px] md:w-[200px] text-center shadow-md">
            <h1 className="text-lg md:text-xl text-yellow-400">
              {transactions.length}
            </h1>
            <h1 className="text-yellow-400 text-center">Transactions</h1>
          </div>
        </div>
        <div className="flex justify-evenly mt-8 flex-wrap chartscont w-full mx-auto">
          <div className="relative mx-auto chartbox ">
            <Chart
              className="m-4 -z-10"
              options={options}
              data={lineGraphData}
              type="line"
            />
          </div>
          <div className="relative mx-auto chartbox ">
            <Doughnut
              className="  m-4 -z-10 "
              options={pieoptions}
              data={pieGraphData}
            />
          </div>
        </div>
        {/* <div className="flex gap-5 justify-center flex-wrap my-2 w-full"> */}
        <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg w-full h-[40vh] m-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
            <thead className="text-xs text-white uppercase ">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-blue-400 "
                >
                  Transaction
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-blue-400 "
                >
                  Income/Expense
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-blue-400 "
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 text-white ${
                    transaction.category === "income"
                      ? "bg-green-400"
                      : "bg-red-400"
                  }`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white-900 whitespace-nowrap"
                  >
                    {transaction.type}
                  </th>
                  <td className="px-6 py-4 capitalize">
                    {transaction.category}
                  </td>
                  <td className="px-6 py-4">₹{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
