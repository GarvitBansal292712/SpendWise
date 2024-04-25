import React from 'react'

const Transaction = () => {
  return (
<>

<div className='md:ml-[256px] mt-[200px] flex justify-center'>

<form className=" mx-5 bg-[#1a1a1a] backdrop-blur-lg p-8 rounded-2xl w-[400px] text-white">
    <h1 className='text-center text-[2rem] leading-10 mb-4'>
        Add Your <i>Income</i> OR <i>Expense</i>
    </h1>


    <label for="number-input" class="block mb-2 text-sm font-medium text-white dark:text-white">Select a number:</label>
    <input type="number" min={1} id="number-input" aria-describedby="helper-text-explanation" class="mb-5 bg-[#111111] border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5  dark:text-white " placeholder="90210" required />




  <label for="countries" class="block mb-2 text-sm font-medium text-white dark:text-white">Select an option</label>
  <select id="countries" class="bg-[#111111] border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>

<h1 className='my-4 text-[#ffffff60]'>

  Today's Date: 27-01-2003 
</h1>

<div className='flex justify-center'>

  <button type="submit" className="text-white my-2 bg-[#1cdbcb] hover:bg-[#1cdbcb8f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Entry</button>
</div>
</form>
</div>

</>  
)}

export default Transaction