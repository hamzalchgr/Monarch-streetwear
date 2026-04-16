import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const DropDown = ({ title, items }) => {
  const [dropped, setDropped] = useState(false);

  return (
    <div id="wrapper" className={clsx("flex flex-col gap-2 ease-in-out overflow-hidden")}>
      <button
        type="button"
        className="flex items-center justify-between font-semibold uppercase h-12 border-t border-border cursor-pointer"
        aria-controls="wrapper"
        onClick={() => setDropped(!dropped)}
      >
        <span>{title}</span>
        {dropped ? <ChevronUp /> : <ChevronDown />}
      </button>
      <p
        className={clsx(
          "transition-all duration-300 ease-in-out overflow-hidden",
          dropped ? "h-fit pb-5" : "h-0 pb-0",
        )}
      >
        {items}
      </p>
    </div>
  );
};

export default DropDown;
