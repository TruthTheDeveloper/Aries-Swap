import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

interface IProps {}

const NavbarLink: { to: string; text: string; isButton?: Boolean }[] = [
  {
    to: "/about",
    text: "About Us",
  },
  {
    to: "/contact",
    text: "Contact Us",
  },
  {
    to: "/auth/login",
    text: "Login",
  },
  {
    to: "/auth/register",
    text: "Register",
    isButton: true,
  },
];

const renderNavbarLink = (): JSX.Element[] => {
  let navs = NavbarLink.map((link) => (
    <li className={`${link.isButton && "btn"}`}>
      <Link href={link.to}>{link.text}</Link>
    </li>
  ));

  return navs;
};

const Navbar: React.FC<IProps> = () => {
  const [seeMobileNav, setSeeMobileNav] = useState<Boolean>(false);
  return (
    <nav>
      <div className="site_title">
        Arie<span>Swap</span>
      </div>

      <div className="nav_controls">
        <ul>{renderNavbarLink()}</ul>
      </div>

      <div className="mobile_controller" onClick={() => setSeeMobileNav(!seeMobileNav)}>
        {seeMobileNav ?<ImCross />:<GiHamburgerMenu />}
      </div>

      {seeMobileNav && (
        <div className="mobile_navigators">
          <ul>{renderNavbarLink()}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
