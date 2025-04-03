import CountryList from "./_components/CountryList";

function page({ searchParams }) {
  return (
    <div>
      <CountryList params={searchParams} />
    </div>
  );
}

export default page;
