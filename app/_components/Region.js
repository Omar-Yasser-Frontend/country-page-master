"use client";

import { useCountries } from "../_context/CountriesContext";

function Region({ region: currRegion }) {
  const { region, setRegion } = useCountries();

  function handleClick() {
    if (region.length === 5 && !region.includes(currRegion))
      return setRegion([]);
    if (region.includes(currRegion))
      return setRegion((region) =>
        region.filter((currentRegion) => currentRegion !== currRegion)
      );
    else return setRegion((region) => [...region, currRegion]);
  }

  return (
    <label
      htmlFor={currRegion.toLowerCase()}
      // onClick={handleClick}
      className={`cursor-pointer py-2 px-4 rounded-xl ${
        region.includes(currRegion) ? "active" : ""
      }`}
    >
      <input
        className="w-0 h-0"
        type="checkbox"
        id={currRegion.toLowerCase()}
        // onClick={handleClick}
        onChange={(e) => handleClick()}

        // value={currRegion}
      />
      {currRegion}
    </label>
  );
}

export default Region;

// wasted code
// function handleClick() {
//   const params = new URLSearchParams(searchParams);

//   if (params.get("filter")?.split("-")?.includes(region))
//     params.set(
//       "filter",
//       params
//         .get("filter")
//         .split("-")
//         .filter((filter) => filter !== region)
//         .join("-")
//     );
//   else if (!params.get("filter")) {
//     params.set("filter", region);
//   } else {
//     const filterParams = searchParams.get("filter") + "-" + region;
//     params.set("filter", filterParams);
//   }
//   router.replace(`${pathname}?${params.toString()}`);
// }
