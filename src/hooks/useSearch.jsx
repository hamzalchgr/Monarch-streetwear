import { useState } from "react";

const useSearch = () => {
  const [query, setQuery] = useState("");

  const clearSearch = () => setQuery("");
  return {
    query,
    setQuery,
    clearSearch
  }
}

export default useSearch