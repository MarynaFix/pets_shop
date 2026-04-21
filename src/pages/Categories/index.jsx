import styles from "./styles.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/categoriesSlice";

const Categories = () => {
  const categories = useSelector((state) => state.categories.list || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className={styles.wrapper}>
      <h2>All Categories</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
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

export default Categories;
