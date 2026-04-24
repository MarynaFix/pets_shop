import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../ui/Breadcrumbs";
import styles from "./styles.module.css";

import axios from "axios";

//const API_URL = "http://localhost:3333";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3333";

const AllProducts = () => {
  // const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("default");
  const [showDiscount, setShowDiscount] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching from:", `${API_URL}/products/all`);
        const response = await axios.get(`${API_URL}/products/all`);
        console.log("Products received:", response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const filteredProducts = (products || []).filter((item) => {
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
        <h1 className={styles.header}>All products</h1>

        {loading && <p>Loading products...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!loading && !error && products.length === 0 && (
          <p>No products found</p>
        )}

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
                        ${item.discont_price ?? "N/A"}
                      </strong>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "rgba(139, 139, 139, 1)",
                        }}
                      >
                        ${item.price ?? "N/A"}
                      </span>
                    </>
                  ) : (
                    <span>${item.price ?? "N/A"}</span>
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

export default AllProducts;
