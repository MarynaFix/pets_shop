import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Breadcrumbs from "../../ui/Breadcrumbs";
import styles from "./styles.module.css";
import { addToCart } from "../../store/shopCartSlice";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:3333/products/${id}`)
      .then((res) => {
        // Backend returns an array, get first element
        const productData = Array.isArray(res.data) ? res.data[0] : res.data;
        setProduct(productData);
      })
      .catch((err) => console.error(err));
  }, [id]);
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: count }));
  };
  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <Breadcrumbs />

      <div className={styles.container}>
        {/* Картинка */}
        <div className={styles.imageBlock}>
          <img src={product.image} alt={product.title} />
        </div>

        {/* Информация */}
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <div className={styles.buttons}>
            <div className={styles.counter}>
              <button onClick={() => setCount((prev) => Math.max(1, prev - 1))}>
                -
              </button>

              <span>{count}</span>

              <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            </div>
            <button className={styles.addBtn} onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
          <p className={styles.descStrong}>Description</p>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.price}>
            {product.discont_price ? (
              <>
                <strong>${product.discont_price}</strong>
                <span className={styles.oldPrice}>${product.price}</span>
              </>
            ) : (
              `$${product.price}`
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
