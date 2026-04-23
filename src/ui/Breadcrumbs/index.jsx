import { useLocation, Link } from "react-router-dom";
import styles from "./styles.module.css";
const routeNames = {
  "": "Main page",
  categories: "Categories",
  products: "Products",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className={styles.breadContainer}>
      <Link to="/" className={styles.routeBtn}>
        {routeNames[""]}
      </Link>

      {pathnames.map((segment, index) => {
        const path = "/" + pathnames.slice(0, index + 1).join("/");
        const label = routeNames[segment] || segment;

        const isLast = index === pathnames.length - 1;

        return (
          <span className={styles.dash} key={path}>
            {"-"}
            {isLast ? (
              <span className={styles.routeBtn}>{label}</span>
            ) : (
              <Link to={path} className={styles.routeBtn}>
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
