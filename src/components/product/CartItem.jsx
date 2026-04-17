import { Edit, Minus, Plus } from "lucide-react";
import Button from "../ui/Button";
import { formatPrice } from "../../utils/formatPrice";
import { Link } from "react-router-dom";

const CartItem = ({ images, title, price, id }) => {
  return (
    <Link to={`/productPage/${id}`}>
      <div className="flex items-start gap-4 py-6">
        <div className="flex-none h-[150px] w-[150px] md:h-[164px] md:w-[164px] overflow-hidden">
          <img
            className="h-full w-full object-center object-cover"
            src={images[0]}
            alt={title}
            loading="lazy"
          />
        </div>

        <div className="w-full h-[150px] md:h-[164px] flex flex-col justify-between">
          <div className="flex flex-wrap gap-1 items-start justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold uppercase ">
                {title}
              </h3>
              <h3 className="font-semibold uppercase ">
                size: {"xl"}
              </h3>
            </div>

            <h3 className="font-semibold uppercase ">
              €{formatPrice(price)}
            </h3>
          </div>

          <div className="flex gap-2">
            <div className="flex border rounded-full">
              <Button variant="secondary" size="sm">
                <Minus size={20} />
              </Button>

              <div className="h-10 w-6 font-medium grid place-items-center">
                1
              </div>

              <Button variant="secondary" size="sm">
                <Plus size={20} />
              </Button>
            </div>

            <Button variant="outline" size="sm">
              <Edit size={20} />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CartItem;
