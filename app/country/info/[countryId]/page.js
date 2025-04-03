import CountryInfoList from "@/app/_components/CountryInfoList";
import { getCountries } from "@/app/_lib/fetching";
import { formatNumber } from "@/app/_lib/formating";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { countryId } = await params;
  return {
    title: `Country Page / ${countryId.replaceAll("_", " ")}`,
  };
}

export async function generateStaticParams() {
  const countries = await getCountries();

  return countries.map((country) => ({
    countryId: country.name.common.replaceAll(" ", "_"),
  }));
}

async function page({ params }) {
  const { countryId } = await params;

  const countries = await getCountries();

  const curCountry = countries.find(
    (country) => country.name.common === countryId.replaceAll("_", " ")
  );

  if (!curCountry) throw new Error("Error 404 Country is not found");

  const {
    flags: { png },
    name: { official, common },
    population,
    capital,
    subregion,
    languages,
    currencies,
    continents,
    area,
    borders,
  } = curCountry;

  const fixedBorders = borders
    ? borders.map((border) =>
        countries.find((country) => country.cca3 === border)
      )
    : null;

  if (common === "Israel")
    return (
      <p className="text-center text-2xl font-bold">
        Please Enter a valid country(real country)
        <Link
          href={"/country/info/Palestine"}
          className="w-fit block mt-5 py-2 px-4 bg-black m-auto"
        >
          retry
        </Link>
      </p>
    );

  return (
    <div className="border-1 border-black w-screen sm:w-xl mx-auto bg-black-bg -mt-10 z-10 rounded-md">
      <Image
        className="mx-auto -mt-12 rounded-md mb-5"
        width={350}
        height={350}
        src={png}
        alt={`image of ${official} flag`}
      />
      <p className="text-center text-2xl font-semibold">{common}</p>
      <p className="text-center">{official}</p>
      <div className="flex items-center justify-center gap-10 my-7 info">
        <p className="bg-black p-1 flex rounded-md">
          <span className="p-2 pr-5 border-r-1 border-[#000] block">
            Population
          </span>
          <span className="p-2 pl-5">{formatNumber(population)}</span>
        </p>
        <p className="bg-black p-1 flex rounded-md">
          <span className="p-2 pr-5 border-r-1 border-[#000] block">
            Area(km<sup>2</sup>)
          </span>
          <span className="p-2 pl-5">{formatNumber(area)}</span>
        </p>
      </div>
      <CountryInfoList
        capital={capital}
        subregion={subregion}
        languages={languages}
        currencies={currencies}
        continents={continents}
        borders={fixedBorders}
      />
    </div>
  );
}

export default page;
