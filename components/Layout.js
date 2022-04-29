import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Header from "./Header";

const menuList = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
];

const Layout = ({ children }) => {
  return (
    <>
      <Navbar menuList={menuList} />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
