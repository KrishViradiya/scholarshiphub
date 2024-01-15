const SearchBar = () => {
  return (
    <div className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search scholarships..."
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300"
      />
    </div>
  );
}

export default SearchBar;
