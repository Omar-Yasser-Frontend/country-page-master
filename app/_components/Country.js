import Link from "next/link";
import { formatNumber } from "../_lib/formating";

function Country({ country, children }) {
  const {
    name: { common },
    population,
    area,
    region,
  } = country;
  if (common === "Israel") return null;

  return (
    <Link
      href={`country/info/${common.replaceAll(" ", "_")}`}
      className={`grid grid-cols-[0.6fr_1fr_1fr_1fr] lg:grid-cols-[0.6fr_1fr_1fr_1fr_1fr] cursor-pointer py-2 gap-2 justify-center items-center`}
    >
      {children}
      <p>{common}</p>
      <p>{formatNumber(population)}</p>
      <p>{formatNumber(area)}</p>
      <p className="hide-region">{region}</p>
    </Link>
  );
}

export default Country;
