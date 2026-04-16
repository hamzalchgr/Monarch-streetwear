import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const SIZES_LIST = [
  { id: "xs", label: "XS" },
  { id: "s", label: "S" },
  { id: "m", label: "M" },
  { id: "l", label: "L" },
  { id: "xl", label: "XL" },
  { id: "xxl", label: "XXL" },
];

const SizeSelector = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium uppercase">size: {selected}</p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-2 gap-1 font-medium">
        {SIZES_LIST.map(({ id, label }) => (
          <li key={id} className="flex-3 min-w-[70px]">
            <button
              type="button"
              className={clsx(
                "h-11 w-full cursor-pointer rounded-lg",
                selected === label ? "bg-primary text-accent" : "text-text-strong border border-border"
              )}
              aria-label={`size: ${id}`}
              onClick={() => setSelected(label)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <Link className="nav-link w-fit text-sm" to="/sizeGuide">
        size guide
      </Link>
    </div>
  );
};

export default SizeSelector;
