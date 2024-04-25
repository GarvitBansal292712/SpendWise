import React from "react";

/* #c594ffPurple */
/* #c594ff black */
/* #1cdbcb  Neon */
const Dashboard = () => {
  return (
    <>
    <div className="md:ml-[256px] flex justify-center items-center ">

      <div className="flex justify-evenly mt-20 gap-4 flex-wrap ">
        <div className="bg-[#c594ff] p-3 rounded-xl w-[200px] text-center">
          <h1 className="text-xl text-white">$43,300</h1>
          <h1 className="text-white text-center">Income</h1>
        </div>
        <div className="bg-[#c594ff] p-3 rounded-xl w-[200px] text-center">
          <h1 className="text-xl text-white">$38,500</h1>
          <h1 className="text-white text-center">Expenses</h1>
        </div>
        <div className="bg-[#c594ff] p-3 rounded-xl w-[200px] text-center">
          <h1 className="text-xl text-white">$5,380</h1>
          <h1 className="text-white text-center">Balance</h1>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
