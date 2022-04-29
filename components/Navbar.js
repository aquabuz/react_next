import Link from "next/link";
import navStyles from "../styles/Nav.module.scss";

const Navbar = (props) => {
  const renderMenuList = props.menuList.map(({ title, href }) => {
    return (
      <li key={title}>
        <Link href={href}>{title}</Link>
      </li>
    );
  });

  return (
    <nav className={navStyles.nav}>
      <ul>{renderMenuList}</ul>
    </nav>
  );
};

export default Navbar;
