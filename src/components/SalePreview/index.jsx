import styles from "./styles.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSales } from "../../store/salesSlice";

const SalePreview = () => {
  const sales = useSelector((state) => state.sales.list);
  const firstSales = sales.slice(0, 4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Sale</h2>

        <Link to="/products" className={styles.allBtn}>
          All sales
        </Link>
      </div>

      <div className={styles.grid}>
        {firstSales.map((sale) => (
          <Link
            to={`/products/${sale.id}`}
            key={sale.id}
            className={styles.card}
          >
            <img src={sale.image} alt={sale.title} />
            <div className={styles.discontPrice}>
              <p>-{sale.discont_price}%</p>
            </div>
            <div className={styles.cardText}>
              <p>{sale.title}</p>
              <h1>${sale.price}</h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default SalePreview;
