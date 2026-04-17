import { useParams } from "react-router-dom"

const SearchPage = () => {
  const { query } = useParams();
  return (
    <div className="pt-60 pb-20 px-4 md:px-12 lg:px-20">
      <h2 className="uppercase font-bold text-4xl">OOPS NO RESULTS FOR "{query}"</h2>
      <p className="font-medium">Don't give up! Check the spelling or do a more generic search</p>
    </div>
  )
}

export default SearchPage