import React from "react";
import { Chart, Pie } from "react-chartjs-2";
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
import { LineGraph, Data } from "../components/LineGraph";
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
const incomeLogs = [
  { date: "2022-01-01", description: "Salary", amount: 5000 },
  { date: "2022-01-15", description: "Freelance", amount: 2000 },
  { date: "2022-01-30", description: "Sold Item", amount: 150 },
  // Add more logs...
];

const expenseLogs = [
  { date: "2022-01-02", description: "Groceries", amount: 200 },
  { date: "2022-01-05", description: "Rent", amount: 1000 },
  { date: "2022-01-07", description: "Utilities", amount: 150 },
  // Add more logs...
];
const Dashboard = () => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: true },
      title: {
        display: true,
        text: "Monthly Earnings and Expense Data", // Add your title here
        font: {
          size: 20, // Adjust as needed
        },
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
  const data = {};
  return (
    <>
      <div className="md:ml-[256px] flex justify-center items-center flex-col">
        <div className="flex justify-evenly mt-20 gap-4 flex-wrap ">
          <div className="bg-[#ffffff] p-3 rounded-xl w-[100px] md:w-[200px] text-center shadow-md">
            <h1 className="text-lg md:text-xl text-green-400">$43,300</h1>
            <h1 className="text-green-400 text-center">Income</h1>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl w-[100px] md:w-[200px] text-center shadow-md">
            <h1 className="text-lg md:text-xl text-red-400">$38,500</h1>
            <h1 className="text-red-400 text-center">Expenses</h1>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl w-[100px] md:w-[200px] text-center shadow-md">
            <h1 className="text-lg md:text-xl text-blue-400">$5,380</h1>
            <h1 className="text-blue-400 text-center">Balance</h1>
          </div>
        </div>
        <div className="flex justify-evenly mt-8 flex-wrap chartscont w-full mx-auto">
          <div className="relative mx-auto chartbox ">
            <Chart
              className="m-4 -z-10"
              options={options}
              data={LineGraph}
              type="line"
            />
          </div>
          <div className="relative mx-auto chartbox ">
            <Pie className="  m-4 -z-10 " options={pieoptions} data={Data} />
          </div>
        </div>
        <div className="flex gap-5 justify-center flex-wrap my-2 w-full">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-blue-100 ">
              <thead class="text-xs text-white uppercase bg-green-600 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Type Of Income
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-green-400 border-b border-green-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Apple MacBook Pro 17"
                  </th>

                  <td class="px-6 py-4">$2999</td>
                </tr>
                <tr class="bg-green-400 border-b border-green-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Microsoft Surface Pro
                  </th>

                  <td class="px-6 py-4">$1999</td>
                </tr>
                <tr class="bg-green-400 border-b border-green-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Magic Mouse 2
                  </th>

                  <td class="px-6 py-4">$99</td>
                </tr>
                <tr class="bg-green-400 border-b border-green-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Google Pixel Phone
                  </th>

                  <td class="px-6 py-4">$799</td>
                </tr>
                <tr class="bg-green-400 border-blue-40">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Apple Watch 5
                  </th>

                  <td class="px-6 py-4">$999</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-blue-100">
              <thead class="text-xs text-white uppercase bg-red-500 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-red-400 border-b border-red-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Apple MacBook Pro 17"
                  </th>

                  <td class="px-6 py-4">Laptop</td>
                  <td class="px-6 py-4">$2999</td>
                </tr>
                <tr class="bg-red-400 border-b border-red-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Microsoft Surface Pro
                  </th>

                  <td class="px-6 py-4">Laptop PC</td>
                  <td class="px-6 py-4">$1999</td>
                </tr>
                <tr class="bg-red-400 border-b border-red-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Magic Mouse 2
                  </th>

                  <td class="px-6 py-4">Accessories</td>
                  <td class="px-6 py-4">$99</td>
                </tr>
                <tr class="bg-red-400 border-b border-red-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Google Pixel Phone
                  </th>

                  <td class="px-6 py-4">Phone</td>
                  <td class="px-6 py-4">$799</td>
                </tr>
                <tr class="bg-red-400 border-blue-40">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Apple Watch 5
                  </th>

                  <td class="px-6 py-4">Wearables</td>
                  <td class="px-6 py-4">$999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
