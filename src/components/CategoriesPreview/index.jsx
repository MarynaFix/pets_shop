import styles from "./styles.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/categoriesSlice";

const CategoriesPreview = () => {
  const categories = useSelector((state) => state.categories.list || []);
  const firstCategories = categories.slice(0, 4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Categories</h2>

        <Link to="/categories" className={styles.allBtn}>
          All categories
        </Link>
      </div>

      <div className={styles.grid}>
        {firstCategories.map((category) => (
          <Link
            to={`/categories/${category.id}`}
            key={category.id}
            className={styles.card}
          >
            <img src={category.image} alt={category.title} />
            <p>{category.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default CategoriesPreview;
