import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../ui/Breadcrumbs";
import styles from "./styles.module.css";
const CategoryPage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("default");
  const [showDiscount, setShowDiscount] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3333/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setCategory(data.category);
      });
  }, [id]);
  const filteredProducts = products.filter((item) => {
    if (!showDiscount) return true;

    return item.discont_price !== null && item.discont_price !== 0;
  });
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <Breadcrumbs />
      <div className={styles.wrapper}>
        <h1 className={styles.header}>{category?.title}</h1>

        <div className={styles.notifications}>
          {" "}
          <select
            className={styles.sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
          <label className={styles.checkbox}>
            {" "}
            Discounted items{" "}
            <input
              type="checkbox"
              onChange={(e) => {
                setShowDiscount(e.target.checked);
              }}
            />
          </label>
        </div>
        <div className={styles.grid}>
          {sortedProducts.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`}>
              <div className={styles.card}>
                <img src={item.image} alt={item.title} width="100%" />
                <button className={styles.addBtn}>Add to cart</button>
                {item.discont_price && (
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      background: "#0D50FF",
                      color: "#fff",
                    }}
                  >
                    sale
                  </div>
                )}

                <h3 className={styles.cardText}>{item.title}</h3>

                <div className={styles.price}>
                  {item.discont_price ? (
                    <>
                      <strong style={{ fontSize: "2rem" }}>
                        ${item.discont_price}
                      </strong>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "rgba(139, 139, 139, 1)",
                        }}
                      >
                        ${item.price}
                      </span>
                    </>
                  ) : (
                    `$${item.price}`
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
