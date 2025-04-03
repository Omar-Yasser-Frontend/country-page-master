import { getCountries } from "../_lib/fetching";
import CountriesProvider from "../_context/CountriesContext";
import Countries from "./Countries";
import SearchInput from "./SearchInput";
import SideContent from "./SideContent";

async function CountryList({ params }) {
  const countries = await getCountries();

  return (
    <div className="border-1 border-black p-5 w-[95vw] sm:w-[93vw] mx-auto bg-black-bg -mt-10 z-10 rounded-md">
      <CountriesProvider data={countries}>
        <SearchInput />
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10">
          <SideContent />
          <Countries countries={countries} />
          {/* <Countries params={await params} countries={countries} /> */}
        </div>
      </CountriesProvider>
    </div>
  );
}

export default CountryList;
