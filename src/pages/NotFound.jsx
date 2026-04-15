import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen px-4">
      <h1 className="text-7xl md:text-[140px] lg:text-[230px] font-extrabold">404</h1>
      <p className="font-medium uppercase text-center">WE COULDN’T FIND WHAT YOU’RE LOOKING FOR. <br/> CONTINUE BROWSING THE COLLECTION.</p>
      <Link className="nav-link" to="/">back home</Link>
    </div>
  )
}

export default NotFound