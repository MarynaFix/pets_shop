import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function PromoDiscounts() {
  return (
    <div className={styles.promo}>
      <h1>Amazing Discounts on Pets Products!</h1>
      <Link to="/sales" className={styles.button}>
        Check out
      </Link>
    </div>
  );
}
export default PromoDiscounts;
