import SearchDropdown from "./SearchDropdown";
import clsx from "clsx";
import SearchInput from "./searchInput";

const SearchBar = ({ toggleSearch, searchOpen }) => {
  
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
        <SearchInput toggleSearch={toggleSearch} />
      </div>

      <SearchDropdown />
    </div>
  );
};

export default SearchBar;
