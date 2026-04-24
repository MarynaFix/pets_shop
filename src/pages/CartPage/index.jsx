import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../ui/Breadcrumbs";
import CartItem from "../../components/CartItem";
import OrderDetailsForm from "../../components/OrderDetails";
import { selectCartItems } from "../../store/shopCartSlice";
import style from "./styles.module.css";

function CartPage() {
  const items = useSelector(selectCartItems);

  return (
    <section className="container">
      <Breadcrumbs />

      <div className={style.headerRow}>
        <h1 className={style.title}>Shopping cart</h1>
        <span className={style.line}></span>
        <Link to="/" className={style.backBtn}>
          Back to the store
        </Link>
      </div>

      {items.length === 0 ? (
        <div className={style.empty}>
          <p>Looks like you have no items in your basket currently.</p>
          <Link to="/products" className={style.shopLink}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className={style.layout}>
          <div className={style.list}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <OrderDetailsForm />
        </div>
      )}
    </section>
  );
}

export default CartPage;
