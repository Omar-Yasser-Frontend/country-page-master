"use client";

import { filterCountries, sortBy } from "../_lib/sortFilter";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

const CountriesContext = createContext();

export default function CountriesProvider({ children, data }) {
  const [countries, setCountries] = useState(data);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("all");
  const [region, setRegion] = useState([]);
  const [member, setMember] = useState(false);
  const [independent, setIndependent] = useState(false);

  const updateCountries = useCallback(
    function updateCountries() {
      const searchFilter = search
        ? data.filter(
            (country) =>
              country.name.common.toLowerCase().startsWith(search) ||
              country.region.toLowerCase().startsWith(search) ||
              country.subregion?.toLowerCase()?.startsWith(search)
          )
        : data;

      setCountries(() =>
        sortBy(filterCountries(searchFilter, region, member, independent), sort)
      );
    },
    [search, region, member, independent, sort, data]
  );

  useEffect(
    function () {
      updateCountries();
    },
    [search, sort, region, member, independent, updateCountries]
  );

  function handleSearch(search) {
    setSearch(search);
  }

  function handleSort(sortBy) {
    setSort(sortBy);
  }

  function handleStatus(type) {
    let currMember;
    let currIndependent;

    if (type === "member") {
      setMember((member) => {
        currMember = member;
        currIndependent = independent;
        return !member;
      });
    } else {
      setIndependent((indpendent) => {
        currMember = member;
        currIndependent = independent;
        return !indpendent;
      });
    }
  }

  return (
    <CountriesContext
      value={{
        countries,
        search,
        sort,
        region,
        member,
        independent,
        handleSearch,
        setRegion,
        handleSort,
        handleStatus,
      }}
    >
      {children}
    </CountriesContext>
  );
}

export function useCountries() {
  const context = useContext(CountriesContext);

  return context;
}
