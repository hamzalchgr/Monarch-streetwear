import { Link } from "react-router-dom";
import { navLinks } from "../../constants";

const NavList = ({ className, ...rest }) => {
  return (
    <ul className={className} {...rest}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <Link to={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
