import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import Logo from "../../assets/icons/logo.svg";
import CartSvg from "../../assets/icons/basket_empty.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="logo" />
      </Link>

      <nav className={styles.nav}>
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/sales">All Sales</NavLink>
      </nav>

      <Link to="/cart" className={styles.cart}>
        <img src={CartSvg} alt="CartrSvg" />
      </Link>
    </header>
  );
};

export default Header;
