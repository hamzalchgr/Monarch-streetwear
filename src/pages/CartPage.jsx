import CartItem from "../components/product/CartItem";
import Button from "../components/ui/Button";

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

const CartPage = () => {
  return (
    <div className="pt-25 pb-10 px-4 md:px-12 lg:px-20 flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-[5fr_2fr] gap-10">
        <div className="flex flex-col gap-2 uppercase">
          <h2 className="font-bold text-xl">MY BAG</h2>
          <ul className="flex flex-col">
            <li>
              <CartItem
                images={pdt.images}
                title={pdt.title}
                price={pdt.price}
                id={pdt.id}
              />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 uppercase">
          <h2 className="font-bold text-xl uppercase">Summary</h2>

          <div className="flex flex-col gap-4 py-6">
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>€120</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Estimated Shipping</span>
              <span>free</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Estimated Tax</span>
              <span>—</span>
            </div>

            <div className="flex justify-between font-medium py-4 border-y border-border">
              <span>Total</span>
              <span>€120</span>
            </div>
          </div>

          <Button variant="primary" size="lg" >checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
