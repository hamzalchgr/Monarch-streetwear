import { Link } from "react-router-dom";

import Logo from "../components/ui/Logo";
import PdtCard from "../components/product/PdtCard";

import img from "../assets/img.png";

const pdt = {
  id: "product-0000-a",
  title: "Mini logo leather shoulder bag",
  slug: "",
  price: 687,
  description:
    "Designed for everyday style and convenience, this bag combines a sleek silhouette with practical functionality.",

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
    <div className="pt-20 pb-10 px-4 md:px-10 lg:px-20 flex flex-col gap-8 md:gap-13 lg:gap-15">
      <Logo type="wordmark" />

      <section className="flex flex-col gap-[50px]">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-medium text-base">OUR BESTSELLERS</p>
            <h2 className="font-extrabold text-3xl md:text-4xl">FEATURED</h2>
          </div>

          <Link className="nav-link" to="/shop/all">
            view all
          </Link>
        </div>

        {/* product Grid */}
        <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li>
            <PdtCard {...pdt} />
          </li>
        </ul>
      </section>

      <section>
        <div className="relative">
          <div className=" w-full h-175 overflow-hidden">
            <img
              className="h-full w-full object-left object-cover"
              src={img}
              alt=""
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full p-4 md:p-10 flex flex-col justify-end gap-5 text-accent">
            <div>
              <p>(NOT FOR EVERYONE)</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                LIMITED PIECES
              </h2>
            </div>

            <p className="max-w-[400px]">
              MADE FOR THOSE WHO KNOW EXACTLY WHAT THEY’RE WEARING. NOCTURN IS A
              STATEMENT.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[50px]">
        <div>
          <p className="font-medium text-base">DROP 01</p>
          <h2 className="font-extrabold text-3xl md:text-4xl">
            EXCLUSIVE LIMITED ARRIVALS
          </h2>
        </div>

        {/* product Grid */}
        <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li>
            <PdtCard {...pdt} />
          </li>
        </ul>

        <div className="flex flex-col gap-5 md:flex-row md:items-end justify-between">
          <p className="max-w-[400px] text-text-muted font-medium">
            A COLLECTION BUILT ON STRUCTURE, SIMPLICITY, AND CONSISTENT FORM.
          </p>

          <Link className="nav-link w-fit" to="/shop/all">
            view all
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-[50px]">
        <div>
          <p className="font-medium text-base">THEY WEAR MONARCH</p>
          <h2 className="font-extrabold text-3xl md:text-4xl">
            WATCH THEM WEAR IT
          </h2>
        </div>

        <p className="max-w-[400px] text-text-muted font-medium">
          UNFILTERED MOMENTS FROM THOSE WHO CHOSE NOCTURN. AUTHENTIC,
          EFFORTLESS, AND REAL.
        </p>

        {/* product Grid */}
        <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li></li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
