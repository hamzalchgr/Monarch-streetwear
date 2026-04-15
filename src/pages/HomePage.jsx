import { Link } from "react-router-dom"

import Logo from "../components/ui/Logo"
import PdtCard from "../components/product/PdtCard"

const pdt = {
  id: "product-0000-a",
  title: "Mini logo leather shoulder bag",
  slug: "",
  price: 687,
  description: "Designed for everyday style and convenience, this bag combines a sleek silhouette with practical functionality.",
  
  category: {
    id: 5,
    name: "Others",
    image: "https://placehold.co/600x400",
    slug: "others",
  },

  images: [
    "https://framerusercontent.com/images/R6c1W6jQkojqM2ISvzTIOhV6Q.png?width=886&height=1200",
    "https://framerusercontent.com/images/T6JhGi9tppJrKRux2RjKiZBVpUY.png?width=886&height=1200",
  ],
};

const HomePage = () => {
  return (
    <div className="pt-20 px-4 md:px-10 lg:px-20 flex flex-col gap-[25px] md:gap-[50px] lg:gap-5">
      <Logo type="wordmark"/>

      <section className="flex flex-col gap-[50px]">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-medium text-base">OUR BESTSELLERS</p>
            <h2 className="font-extrabold text-3xl md:text-4xl">FEATURED</h2>
          </div>

          <Link className="nav-link" to="/shop/all">view all</Link>
        </div>

        {/* product Grid */}
        <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li>
            <PdtCard {...pdt} />
          </li>
        </ul>
      </section>
    </div>
  )
}

export default HomePage