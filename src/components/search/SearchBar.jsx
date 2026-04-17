import { Delete, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchDropdown from "./SearchDropdown";
import clsx from "clsx";

const SearchBar = ({ toggleSearch, searchOpen }) => {
  const [query, setQuery] = useState("");

  const emptySearch = () => setQuery("");
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 h-full w-full bg-[#343a4040] backdrop-blur-lg flex flex-col justify-center items-center gap-4 px-4 md:px-12 lg:px-30",
        searchOpen ? "block" : "hidden",
      )}
      aria-hidden={!searchOpen}
      onClick={toggleSearch}
    >
      <div
        className="flex flex-col w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-center gap-2">
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
              onClick={emptySearch}
            >
              <Delete size={20} />
            </button>
            <Link
              to={query ? `/searchPage/${query}` : `/searchPage/${query}`}
              className="h-12 w-12 grid place-items-center cursor-pointer rounded-lg"
              onClick={toggleSearch}
            >
              <Search size={20} />
            </Link>
          </div>
        </div>
      </div>

      <SearchDropdown />
    </div>
  );
};

export default SearchBar;
