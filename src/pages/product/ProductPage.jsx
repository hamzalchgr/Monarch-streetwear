import ImgList from "./ImgList";
import PdtGallery from "./PdtGallery";

import { formatPrice } from "../../utils/formatPrice";

import SizeSelector from "./SizeSelector";
import Button from "../../components/ui/Button";
import { ShoppingBag } from "lucide-react";

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

const ProductPage = () => {
  return (
    <div className="pt-15 grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
      <div>
        <div className="lg:hidden">
          <PdtGallery gallery={pdt.images} />
        </div>
        <div className="hidden lg:block">
          <ul className="grid grid-cols-2 gap-y-0.5">
            <ImgList imgs={pdt.images} title={pdt.title} />
          </ul>
        </div>
      </div>

      <div className="p-4 md:p-10 lg:p-7 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="p-2 bg-surface w-fit uppercase font-semibold text-sm">
            bottoms
          </h3>
          <h2 className="uppercase font-bold text-2xl">{pdt.title}</h2>
          <p className="font-medium text-xl">€{formatPrice(pdt.price)}</p>
        </div>

        <p className="font-medium uppercase">{pdt.description}</p>

        <SizeSelector />

        <Button variant="primary" size="lg" className="gap-3">
          <span>
            <ShoppingBag strokeWidth={2} size={20} />
          </span>
          <span>add to bag</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
