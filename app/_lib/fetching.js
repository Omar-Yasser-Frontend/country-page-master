export async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) throw new Error("Failed to fetch data");

  let data = await res.json();
  return data;
}
