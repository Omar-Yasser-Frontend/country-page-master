"use client";

import { createContext, useContext, useState } from "react";

const SortFilterContext = createContext();

export default function SortFilterProvider({ children }) {
  const [sort, setSort] = useState("all");
  const [region, setRegion] = useState([]);
  const [member, setMember] = useState(false);
  const [independent, setIndependent] = useState(false);

  const [search, setSearch] = useState("");
  return (
    <SortFilterContext
      value={{
        sort,
        setSort,
        region,
        setRegion,
        member,
        setMember,
        independent,
        setIndependent,
        search,
        setSearch,
      }}
    >
      {children}
    </SortFilterContext>
  );
}

export function useSortFilter() {
  const context = useContext(SortFilterContext);

  if (context === undefined) throw new Error("Context used outside it's scope");

  return context;
}
