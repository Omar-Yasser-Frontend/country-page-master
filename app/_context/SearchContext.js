"use client";

// import { throwIfDisallowedDynamic } from "next/dist/server/app-render/dynamic-rendering";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  return (
    <SearchContext value={{ search, setSearch }}>{children}</SearchContext>
  );
}

export function useSearchInput() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("don't use the provider out it's scope");
  return context;
}

export default SearchProvider;
