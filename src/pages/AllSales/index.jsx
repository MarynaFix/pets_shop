import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../ui/Breadcrumbs";
import styles from "../CategoryPage/styles.module.css";

const AllSales = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    fetch(`http://localhost:3333/products/all`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data || data);
      });
  }, []);
  const discountedProducts = products.filter(
    (item) => item.discont_price && item.discont_price !== 0,
  );
  const sortedProducts = [...discountedProducts].sort((a, b) => {
    if (sort === "price-asc") return a.discont_price - b.discont_price;
    if (sort === "price-desc") return b.discont_price - a.discont_price;
    return 0;
  });
  return (
    <div>
      <Breadcrumbs />

      <div className={styles.wrapper}>
        <h1 className={styles.header}>Discounted products</h1>

        <div className={styles.notifications}>
          <select
            className={styles.sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
        </div>

        <div className={styles.grid}>
          {sortedProducts.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`}>
              <div className={styles.card}>
                <img src={item.image} alt={item.title} />

                <button className={styles.addBtn}>Add to cart</button>

                <div className={styles.sale}>sale</div>

                <h3 className={styles.cardText}>{item.title}</h3>

                <div className={styles.price}>
                  <strong>${item.discont_price}</strong>
                  <span className={styles.oldPrice}>${item.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllSales;
