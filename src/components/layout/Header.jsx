import { Link, Outlet } from "react-router-dom";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

import { Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import NavList from "./NavList";
import SearchBar from "../search/SearchBar";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <>
      <header>
        <nav className="nav-menu relative bg-accent">
          <Link className="w-fit" to="/">
            <Logo type="icon" className="h-10 w-fit" />
          </Link>

          <NavList className="nav-list" />

          <div className="flex items-center gap-2 md:gap-4 justify-end">
            <Button
              size="sm"
              variant="secondary"
              className="flex-none"
              onClick={toggleSearch}
            >
              <Search size={20} />
            </Button>

            <Link className="icon-link" to="/cart">
              <ShoppingBag size={20} />
            </Link>

            <Link className="icon-link" to="/auth">
              <User size={20} />
            </Link>

            <Button
              size="sm"
              variant="secondary"
              className="menu-icon md:hidden flex-none"
              aria-label="toggle menu"
              aria-controls="mobile-nav"
              aria-expanded={isNavOpen}
              onClick={toggleNav}
            >
              <div className={clsx(isNavOpen && "absolute rotate-45")}></div>
              <div className={clsx(isNavOpen && "absolute -rotate-45")}></div>
            </Button>
          </div>
        </nav>

        {/* Mobile NavMenu */}
        <div
          id="mobile-nav"
          className={clsx(
            "fixed z-50 w-full top-15 md:hidden transition-all duration-200 ease-in-out",
            isNavOpen ? "h-screen backdrop-blur-lg" : "h-0 overflow-hidden",
          )}
          onClick={() => isNavOpen && setIsNavOpen(false)}
          aria-hidden={!isNavOpen}
        >
          <NavList
            className="mobile-nav-list"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <SearchBar toggleSearch={toggleSearch} searchOpen={searchOpen} />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
