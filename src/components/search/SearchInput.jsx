import useSearch from "../../hooks/useSearch";
import { Delete, Search } from "lucide-react";

import { Link } from "react-router-dom";

const SearchInput = ({ toggleSearch }) => {
  const { query, setQuery, clearSearch } = useSearch();

  return (
    <div className="relative flex items-center gap-2 w-full">
          <input
            className="h-12 w-full bg-accent"
            type="text"
            name=""
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Research..."
            id=""
          />

          <div className="absolute right-0 top-0 h-12 flex">
            <button
              className="h-12 w-12 grid place-items-center cursor-pointer rounded-lg"
              onClick={clearSearch}
            >
              <Delete size={20} />
            </button>
            <Link
              to={query ? `/searchPage/${query}` : `/searchPage/_`}
              className="h-12 w-12 grid place-items-center cursor-pointer rounded-lg"
              onClick={toggleSearch}
            >
              <Search size={20} />
            </Link>
          </div>
        </div>
  )
}

export default SearchInput