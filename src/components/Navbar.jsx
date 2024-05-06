import { useEffect, useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

import React from "react";
import logo from "../assets/image/logo.png";
import pfp from "../assets/image/pfp.jpg";
import { MdAccountBalance } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const button = document.querySelector(
      '[data-drawer-toggle="logo-sidebar"]'
    );

    if (button) {
      button.addEventListener("click", () => {
        setTimeout(() => {
          const backdrop = document.querySelector("[drawer-backdrop]");
          if (backdrop) {
            backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.1)"; // Change this to your preferred color
          }
        }, 0);
      });
    }
  }, []);

  // Declaring the Context
  const { transactions } = useContext(TransactionContext);
  // Using Context to show the balance in the sidebar using the transactions
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

  return (
    <>
      <nav className="fixed top-0 z-50 w-full  bg-[#000000]  font-montserrat">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-white bg-[#111111] rounded-lg md:hidden  focus:outline-none  "
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img src={logo} className="h-8 me-3" alt="SpendWise Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                  Spend Wise
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 w-64 h-full pt-20 transition-transform z-10 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#000000] md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#000000] ">
          <div className="flex flex-col justify-center gap-4 ">
            <div className="items-center flex justify-center">
              <img
                className="w-40 h-40 rounded-full bg-transparent"
                src={pfp}
                alt="user photo"
              />
            </div>
            <div>
              <h1 className="bg-[#1a1a1a] text-white p-2 flex items-center justify-center text-lg rounded-3xl gap-4 shadow-white">
                <MdAccountBalance size={20} />₹{totalIncome - totalExpense}
              </h1>
            </div>
          </div>

          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 " />
          <ul className="space-y-2 font-medium ">
            <li className="">
              <Link
                to="/"
                className="flex justify-center items-center p-2  rounded-3xl bg-[#1a1a1a] text-white hover:text-black hover:bg-[#1cdbcb] text-center  group"
              >
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                to="/transaction"
                className="flex justify-center items-center p-2  rounded-3xl bg-[#1a1a1a] text-white hover:text-black hover:bg-[#1cdbcb] text-center group"
              >
                <span className="ms-3">Transactions</span>
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-0 mb-5">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="#" className="hover:underline">
                Spend Wise™
              </a>{" "}
              <br />
              By: Garvit Bansal. All Rights Reserved.
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
