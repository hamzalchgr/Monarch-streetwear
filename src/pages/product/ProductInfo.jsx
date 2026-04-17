import { formatPrice } from "../../utils/formatPrice";
import SizeSelector from "./SizeSelector";
import Button from "../../components/ui/Button";
import { ShoppingBag } from "lucide-react";
import DropDown from "../../components/ui/DropDown";

const DELIVERY_RETURNS = [
  {
    title: "Delivery",
    items: [
      "Processed within 1–2 business days",
      " Worldwide shipping available",
      " Free shipping over €200",
    ],
  },
  {
    title: "Returns",
    items: "30-day return policy: Return items within 30 days for a refund or exchange. Refunds go back to the original payment method, while store credit purchases can only be returned as store credit.",
  },
];

const ProductInfo = ({ title, price, description }) => {
  return (
    <div className="p-4 md:p-10 lg:p-8 mx-auto flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h3 className="p-2 bg-surface w-fit uppercase font-semibold text-sm">
          bottoms
        </h3>
        <h2 className="uppercase font-bold text-2xl">{title}</h2>
        <p className="font-medium text-xl">€{formatPrice(price)}</p>
      </div>

      <p className="leading-5 text-text-strong">{description}</p>

      <SizeSelector />

      <div className="flex flex-col gap-2.5">
        <Button variant="primary" size="lg" className="gap-3">
          <span>
            <ShoppingBag strokeWidth={2} size={20} />
          </span>
          <span>add to bag</span>
        </Button>

        <Button variant="outline" size="lg" className="">
          buy now
        </Button>

        <p>30-day risk-free guarantee. Free EU shipping.</p>
      </div>

      <ul className="flex flex-col">
        {DELIVERY_RETURNS.map(({ title, items }) => (
          <li key={title}>
            <DropDown title={title} items={items} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInfo;
