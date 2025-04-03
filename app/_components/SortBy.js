"use client";

import { useCountries } from "../_context/CountriesContext";

function SortBy() {
  const { sort, handleSort } = useCountries();

  function handleChange(e) {
    handleSort(e.target.value);
  }

  return (
    <div className="flex flex-col gap-2 mb-8">
      <label>Sort by</label>
      <select
        onChange={handleChange}
        value={sort}
        className="border-1 border-black py-2 px-4 rounded-md bg-black-bg"
      >
        <option value="all">All</option>
        <option value="population">Population</option>
        <option value="area">Area</option>
        <option value="region">Region</option>
      </select>
    </div>
  );
}

export default SortBy;
