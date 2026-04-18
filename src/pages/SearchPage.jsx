import { Link, useParams } from "react-router-dom";
import SearchInput from "../components/search/searchInput";

const SearchPage = () => {
  const { query } = useParams();
  return (
    <div className="pt-60 pb-20 px-4 md:px-12 lg:px-20 flex items-center justify-center">
      {query ? (
<div className="flex flex-col gap-10 w-full">
        <div className="flex gap-2 font-medium uppercase">
          <Link to="/homePage" className="nav-link">
            home
          </Link>
          <span>/</span>
          <p>{query}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium uppercase">Search results for</p>
          <h2 className="uppercase font-extrabold text-4xl md:text-5xl">
            {query} (10)
          </h2>
        </div>

        {/* Results grid */}
        <ul></ul>
      </div>
      ) : (
<div className="flex flex-col gap-2 justify-center items-center max-w-[700px]">
        <h2 className="uppercase font-bold text-4xl">
          OOPS NO RESULTS FOR "{query}"
        </h2>
        <p className="font-medium uppercase text-text-muted pb-5">
          Don't give up! Check the spelling or do a more generic search
        </p>

        <SearchInput />
      </div>
      )}
      {/* if no result */}
      {/*  */}

      {/* if results */}
      
    </div>
  );
};

export default SearchPage;
