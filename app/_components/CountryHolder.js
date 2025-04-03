import { memo } from "react";
import Country from "./Country";
import Image from "next/image";

const CountryHolder = memo(function CountryHolder({ data }) {
  return (
    <>
      {data.map((country, index) => (
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
      ))}
    </>
  );
});

export default CountryHolder;
