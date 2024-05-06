import React, { useContext } from "react";
import { useState } from "react";
import {TransactionContext} from "../context/TransactionContext"
const Transaction = () => {
  const [activeForm, setActiveForm] = useState("income");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const currentDate = new Date();
  const {addTransaction}  = useContext(TransactionContext)
  //Converting Month to Month Name
  const monthNames = [
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

  // Format the date as a string
  const dateString = `${currentDate.getFullYear()}-${monthNames[currentDate.getMonth() + 1]}-${currentDate.getDate()}`;
  const monthName = monthNames[currentDate.getMonth()];

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      month: monthName,
      category: activeForm,
      type: type,
      amount: amount,
    }
    addTransaction(transaction)
    console.log("Amount: ", amount);
    console.log("Type: ", type);
    console.log("Date: ", monthName);
    console.log("Category: ", activeForm);
    setType("");
    setAmount("");
  };
  return (
    <>
      <div className="md:ml-[256px] mt-[200px] flex justify-center">
        <form
          onSubmit={handleSubmit}
          className=" mx-5 bg-[#1a1a1a] backdrop-blur-lg p-8 rounded-2xl w-[400px] text-white"
        >
          <h1 className="text-center text-[2rem] leading-10 mb-4">
            Add Your <i>Income</i> OR <i>Expense</i>
          </h1>

          <div className="flex justify-center my-2">
            <a
              onClick={() => setActiveForm("income")}
              className={`px-4 py-2  cursor-pointer bg-[#1cdbcb] rounded-l-3xl hover:text-black border-r-[1px] ${
                activeForm === "income" ? "bg-white text-black" : "bg-[#1cdbcb]"
              }`}
            >
              Income
            </a>
            <a
              onClick={() => setActiveForm("expense")}
              className={`px-4 py-2 cursor-pointer bg-[#1cdbcb] rounded-r-3xl hover:text-black border-l-[1px] ${
                activeForm === "expense"
                  ? "bg-white text-black"
                  : "bg-[#1cdbcb]"
              }`}
            >
              Expense
            </a>
          </div>

          {/* Input form for Income */}
          {activeForm === "income" && (
            <>
              <label
                htmlFor="number-input"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Amount of Income:
              </label>
              <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="mb-5 bg-[#111111] border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5  dark:text-white "
                placeholder="Enter Your Amount"
              />

              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Type of Income
              </label>
              <select
                id="income"
                className="bg-[#111111] cursor-pointer border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >

                <option value="">Select a type</option>
                <option value="Salary/Wages">Salary/Wages</option>
                <option value="Freelance/Consulting">
                  Freelance/Consulting
                </option>
                <option value="Investment Income">Investment Income </option>
                <option value="Rental Income">Rental Income</option>
                <option value="Business Profits">Business Profits</option>
                <option value="Bonuses/Commissions">Bonuses/Commissions</option>
                <option value="Grants/Scholarships">Grants/Scholarships</option>
                <option value="Gifts/Inheritance">Gifts/Inheritance</option>
                <option value="Side Hustle Income">Side Hustle Income</option>
                <option value="Alimony/Child Support">
                  Alimony/Child Support
                </option>
              </select>
            </>
          )}

          {/* Input form for Expense */}
          {activeForm === "expense" && (
            <>
              <label
                htmlFor="number-input"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Amount of Expense:
              </label>
              <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="mb-5 bg-[#111111] border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5  dark:text-white "
                placeholder="Enter Your Amount"
              />

              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Type of Expense
              </label>
              <select
                id="expense"
                className="bg-[#111111] cursor-pointer border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">Select a type</option>
                <option value="Groceries">Groceries</option>
                <option value="Transportation">Transportation</option>
                <option value="Utilities">Utilities</option>
                <option value="Dining Out">Dining Out</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Housing">Housing</option>
                <option value="Clothing and Accessories">
                  Clothing and Accessories
                </option>
                <option value="Education">Education</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </>
          )}

          <h1 className="my-4 text-[#ffffff60]">Today's Date: {dateString}</h1>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white my-2 bg-[#1cdbcb] hover:bg-[#1cdbcb8f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit Entry
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Transaction;
