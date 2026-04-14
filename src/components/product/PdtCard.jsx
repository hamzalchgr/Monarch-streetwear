import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

const PdtCard = ({ id, title, price, images }) => {
  return (
    <Link to={`/productPage/${id}`} className="flex flex-col gap-4 group">
      <div className="h-full w-full aspect-square overflow-hidden">
        <img
          className="h-full w-full object-center object-cover group-hover:scale-105 transition-all duration-200 ease-in-out"
          src={images[0]}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-base uppercase font-semibold">{title}</h2>
        <p className="">€{formatPrice(price)}</p>
      </div>
    </Link>
  );
};

export default PdtCard;
