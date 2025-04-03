import Image from "next/image";
import Link from "next/link";
import { filterIsrael } from "../_lib/formating";

function CountryInfoList({
  capital,
  subregion,
  languages,
  currencies,
  continents,
  borders,
}) {
  const langKeys = Object.keys(languages);
  const langs = langKeys.map((key) => languages[key]);
  const CurrenciesKeys = Object.keys(currencies);
  const curren = CurrenciesKeys.map((key) => currencies[key]);
  const filteredBorders = borders ? filterIsrael(borders) : null;
  return (
    <ul>
      <li className="flex items-center justify-between border-y-1 border-y-black p-5 gap-4">
        <span>capital</span>
        <span>{capital.join(", ")}</span>
      </li>
      {subregion && (
        <li className="flex items-center justify-between border-b-1 border-b-black p-5 gap-4">
          <span>subregion</span> <span>{subregion}</span>
        </li>
      )}
      <li className="flex items-center justify-between border-b-1 border-b-black p-5 gap-4">
        <span>languages</span> <span>{langs.join(", ")}</span>
      </li>
      <li className="flex items-center justify-between border-b-1 border-b-black p-5 gap-4">
        <span>Currencies</span>{" "}
        <span>{curren.map((currencies) => currencies.name).join(", ")}</span>
      </li>
      <li className="flex items-center justify-between border-b-1 border-b-black p-5 gap-4">
        <span>Continents</span> <span>{continents.join(", ")}</span>
      </li>

      {borders && (
        <li className="mb-20 p-5">
          <p className="mb-5">Neighbours Countries</p>
          <div className="flex flex-wrap gap-4 items-center">
            {filteredBorders.map(({ name: { common }, flags: { png } }) => (
              <Link
                href={`/country/info/${common.replaceAll(" ", "_")}`}
                key={common}
              >
                <Image
                  src={png}
                  width={100}
                  height={60}
                  alt={`image of ${common} flag`}
                />
                <p className="text-center">{common}</p>
              </Link>
            ))}
          </div>
        </li>
      )}
    </ul>
  );
}

export default CountryInfoList;
