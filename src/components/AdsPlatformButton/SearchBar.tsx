// components/SearchBar.tsx
const SearchBar = () => {
  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Find Campaign"
          className="focus:border-primary-500 focus:ring-primary-500 w-72 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm"
        />
        <button className="bg-primary-500 hover:bg-primary-600 border-gray-300y- absolute right-2 top-1/2 -translate-y-1/2 rounded-md border-l px-4 py-1 text-sm text-black">
          Find
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
