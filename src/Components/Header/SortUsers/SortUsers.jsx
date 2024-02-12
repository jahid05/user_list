import { useState } from "react";


const SortUsers = ({handleSorting}) => {
  
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl">
      <select onChange={(e)=>handleSorting(e.target.value)} className="select font-semibold bg-transparent border-none focus:outline-none w-full md:w-48 text-white">
        <option disabled selected>
          Sort By
        </option>
        <option value="firstName" className="font-semibold bg-violet-400 text-white">Name</option>
        <option value="email" className="font-semibold bg-violet-400 text-white">Email</option>
        <option value="name" className="font-semibold bg-violet-400 text-white">Company</option>
      </select>
    </div>
  );
};

export default SortUsers;
