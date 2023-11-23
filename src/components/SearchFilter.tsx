import React from "react";

interface SearchFilterProps {
  search: () => void;
  location: string;
  setLocation: (location: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  search,
  setLocation,
  location,
}) => {
  return (
    <div className="flex shadow-md rounded-full px-4 py-2 border border-slate-300 focus-within:border-slate-400">
      <input

        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search location"
        className="outline-none w-full bg-transparent"
      />
      <button onClick={search}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-slate-500 fill-current"
          id="Outline"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchFilter;
