import React from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, LineController,CategoryScale, LinearScale, LineElement, PointElement,Title,Tooltip,Legend } from "chart.js";
import LineGraph from "../components/LineGraph";
ChartJS.register( LineController,CategoryScale,LinearScale,  LineElement, PointElement, Title, Tooltip, Legend);
/* #c594ffPurple */
/* #c594ff black */
/* #1cdbcb  Neon */
const Dashboard = () => {
  const options={}
  const data ={}
  return (
    <>
    <div className="md:ml-[256px] flex justify-center items-center flex-col">

      <div className="flex justify-evenly mt-20 gap-4 flex-wrap ">
        <div className="bg-[#1a1a1a] p-3 rounded-xl w-[200px] text-center">
          <h1 className="text-xl text-white">$43,300</h1>
          <h1 className="text-white text-center">Income</h1>
        </div>
        <div className="bg-[#1a1a1a] p-3 rounded-xl w-[200px] text-center">
          <h1 className="text-xl text-white">$38,500</h1>
          <h1 className="text-white text-center">Expenses</h1>
        </div>
        <div className="bg-[#1a1a1a] p-3 rounded-xl w-[200px] text-center">
          <h1 className="text-xl text-white">$5,380</h1>
          <h1 className="text-white text-center">Balance</h1>
        </div>
      </div>
      <div>
        <Chart type="line" options={options} data={LineGraph} />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
