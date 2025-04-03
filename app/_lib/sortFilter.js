export function sortBy(countries, type) {
  // if (type === "all") return countries;
  // else if (typeof countries[0][type] === "number")
  //   countries.sort((a, b) => b[type] - a[type]);
  // else countries.sort((a, b) => a.region.localeCompare(b.region));

  console.log(type);

  switch (type) {
    case "all":
      return countries;
    case "population":
      return countries.sort((a, b) => b.population - a.population); // Fixed comparison
    case "area":
      return countries.sort((a, b) => b.area - a.area); // Fixed comparison
    case "region":
      return countries.sort((a, b) => a.region.localeCompare(b.region)); // Fixed for strings
    default:
      throw new Error("STOP PLAYING IN URL QUERYS" + " " + type);
  }
}

export function filterByRegion(countries, region) {
  if (!region.length) return countries;
  return countries.filter((country) => region.includes(country.region));
}

export function filterByMember(countries, member, independent) {
  let result = countries;
  if (member) result = result.filter((country) => country.unMember);
  if (independent) result = result.filter((country) => country.independent);
  return result;
}

export function filterCountries(countries, region, member, independent) {
  return countries.filter((country) => {
    if (region.length && !region.includes(country.region)) return false;
    else if (member && !country.unMember) return false;
    else if (independent && !country.independent) return false;
    else if (country.name.common === "Israel") return false;

    return true;
  });
}
