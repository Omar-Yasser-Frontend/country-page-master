"use client";

import { useCountries } from "../_context/CountriesContext";
import CountryHolder from "./CountryHolder";

function Countries() {
  const { countries: data } = useCountries();

  return (
    <div>
      <div className="gap-10 grid grid-cols-[0.6fr_1fr_1fr_1fr] lg:grid-cols-[0.6fr_1fr_1fr_1fr_1fr] pb-3 border-b-1 border-b-black mb-2">
        <div>Flag</div>
        <div>Name</div>
        <div>Population</div>
        <div>
          Area(km<sup>2</sup>)
        </div>
        <div className="hide-region">Region</div>
      </div>
      <div>
        <CountryHolder data={data} />
        {/* {data.map((country, index) => (
          <Country
            index={index}
            key={country.name.common}
            country={country}
            gridCols={"grid-cols-[0.6fr_1.5fr_1.5fr_1.5fr_2fr]"}
          >
            <Image
              width={50}
              height={50}
              className="rounded-sm"
              src={country.flags.png}
              alt={`flag of ${country.name.common}`}
            />
          </Country>
        ))} */}
      </div>
    </div>
  );
}

export default Countries;
