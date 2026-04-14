import LogoDark from "../../assets/LogoDark.svg";
import BrandMark from "../../assets/BrandMark.svg";
import { Link } from "react-router-dom";

const Logo = ({ type, className }) => {
  const types = {
    wordmark: LogoDark,
    icon: BrandMark,
  };

  return (
    <div className={className}>
      <img
        className="h-full w-full object-center object-cover"
        src={types[type]}
        alt="Monarch brand logo"
      />
    </div>
  );
};

export default Logo;
