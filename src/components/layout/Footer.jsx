import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { LEGAL, navLinks } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col gap-7">
        <div className="flex justify-between uppercase font-medium">
          <p>Built to Lead.</p>
          <p>since'2k26</p>
        </div>
        <Logo type="wordmark" className="w-full" />
      </div>

      <div className="grid gap-11 grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col gap-6">
          <p>SUBSCRIBE TO OUR NEWSLETTER</p>

          <form className="flex flex-col gap-2" action="">
            <input type="email" placeholder="mark@monarch.com" required />
            <Button variant="primary" size="lg" type="submit">
              subscribe
            </Button>
          </form>

          <p>
            MONARCH delivers essential pieces designed for control and everyday
            wear.
          </p>
        </div>

        <div className="hidden lg:block" />

        <div className="grid grid-cols-1 gap-11 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p>LEGAL</p>
            <ul className="flex flex-col gap-2 text-sm">
              {LEGAL.map(({ label, id }) => (
                <li key={id}>
                  <Link className="nav-link" to={`/policies/${id}`}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <p>QUICK LINKS</p>
            <ul className="flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link className="nav-link" to={link.path}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link className="nav-link" to="/faq">faqs</Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">about</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-sm">© 2026 monarch. ALL RIGHTS RESERVED. MADE BY hamza.</p>
    </footer>
  );
};

export default Footer;
