import PromoDiscounts from "../../components/PromoDiscounts";
import styles from "./styles.module.css";
import CategoriesPreview from "../../components/CategoriesPreview";
function MainPage() {
  return (
    <div className={styles.mainPage}>
      <PromoDiscounts />
      <CategoriesPreview />
    </div>
  );
}
export default MainPage;
