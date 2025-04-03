"use client";

import { useCountries } from "../_context/CountriesContext";

function SearchInput() {
  const { search, handleSearch, countries } = useCountries();
  return (
    <div className="flex justify-between sm:items-center flex-col sm:flex-row items-start mb-6">
      <p className="font-semibold">Found {countries.length} countries</p>
      <div
        id="search"
        className="w-full sm:w-[300px] sm:max-w-full mt-5 sm:mt-0 relative"
      >
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          value={search}
          className="bg-black py-2 px-4 rounded-md w-full sm:w-[300px] sm:max-w-full placeholder:text-light-gray focus:outline-none pl-10"
          placeholder="Search by Name, Region, Subregion"
        />
      </div>
    </div>
  );
}

export default SearchInput;
