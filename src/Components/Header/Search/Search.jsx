const Search = ({searchData}) => {
  const {setQuery, handleSubmit} = searchData
  return (
    <div className="flex justify-center py-2">
      <input
        type="text"
        placeholder="Search by user's name"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default Search;
