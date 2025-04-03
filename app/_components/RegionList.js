"use client";

import Region from "./Region";

const regions = [
  "Americas",
  "Antarctic",
  "Africa",
  "Asia",
  "Europe",
  "Oceania",
];

function RegionList() {
  return (
    <div className="mb-8">
      <h2 className="mb-4">Region</h2>

      <div className="flex flex-wrap gap-2 region">
        {regions.map((region) => (
          <Region key={region} region={region} />
        ))}
      </div>
    </div>
  );
}

export default RegionList;
