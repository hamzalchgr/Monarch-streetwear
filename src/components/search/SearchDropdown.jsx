import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

const pdt = {
  id: "product-0000-a",
  title: "Firebird Track Pants",
  slug: "",
  price: 687,
  description:
    "The Firebird Track Pants are a nod to the classic brand style, reimagined for today's lifestyle. Whether you're heading out for a casual day or lounging at home, these track pants are your go-to choice for style and comfort.",

  category: {
    id: 5,
    name: "Others",
    image: "https://placehold.co/600x400",
    slug: "others",
  },

  images: [
    "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1651f914a4f0430490ed636fb21d1cf6_9366/Firebird_Track_Pants_Black_KD8315_21_model.jpg",
    "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/df1c1940e06f447d82611b70bf79a5e9_9366/Firebird_Track_Pants_Black_KD8315_23_hover_model.jpg",
    "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2a4ff6d6e6c44a39e8f80a5b8a26631_9366/Firebird_Track_Pants_Black_KD8315_25_model.jpg",
  ],
};

const SearchDropdown = () => {
  return (
    <div className="bg-accent w-full rounded-lg">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        <li>
          <Link className="flex items-start gap-4" to={`/productPage/${pdt.id}`}>
          <div className="h-20 w-20 overflow-hidden">
            <img className="h-full w-full object-center object-cover" src={pdt.images[0]} alt={pdt.title} loading="lazy" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="uppercase font-semibold ">{pdt.title}</h3>
          <h3 className="uppercase font-semibold ">€{formatPrice(pdt.price)}</h3>
          </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SearchDropdown