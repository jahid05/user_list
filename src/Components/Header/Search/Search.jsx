import { IoSearch } from "react-icons/io5";

const Search = ({searchData}) => {
  const {searchQuery, handleSearchInputChange} = searchData;
  return (
    <div className="flex items-center px-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500">
          <span className="text-2xl text-white">
            <IoSearch />
          </span>
          <input
            className="input w-48 bg-transparent border-none focus:outline-none font-semibold text-white"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
  );
};

export default Search;
