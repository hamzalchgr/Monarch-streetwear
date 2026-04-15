import { useParams } from "react-router-dom";
import PdtCard from "../../components/product/PdtCard";
import DisplayCategories from "./DisplayCategories";

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

const ShopPage = () => {
  const { category } = useParams();
  return (
    <div className="shop-page pb-10">
      <div className="flex flex-col gap-5">
        
        <div className="flex justify-between items-end">
          <h2 className="transition-all duration-200 ease-in-out">
            {category === "all" ? "all products" : category}
          </h2>
          <p className="pdt-grid-length">(10)</p>
        </div>

        <div className="h-60 wfull overflow-hidden">
          <img
            className="h-full w-full object-center object-cover"
            src="https://framerusercontent.com/images/W8qO6TPJCyyoED4Ene1ERN8bb4U.png?scale-down-to=2048&width=4160&height=5200"
            alt="category display"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {/* Category list */}
        <DisplayCategories />

        {/* products list */}
        <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li>
            <PdtCard {...pdt} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopPage;
