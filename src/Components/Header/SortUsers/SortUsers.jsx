const SortUsers = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl">
      <select className="select font-semibold bg-transparent border-none focus:outline-none w-full md:w-48 text-white">
        <option disabled selected>
          Sort By
        </option>
        <option className="font-semibold bg-violet-400 text-white">Name</option>
        <option className="font-semibold bg-violet-400 text-white">Email</option>
        <option className="font-semibold bg-violet-400 text-white">Company</option>
      </select>
    </div>
  );
};

export default SortUsers;
