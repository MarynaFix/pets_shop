import PromoDiscounts from "../../components/PromoDiscounts";
import styles from "./styles.module.css";
import CategoriesPreview from "../../components/CategoriesPreview";
import FormFirstOrder from "../../components/FormFirstOrder";
import SalePreview from "../../components/SalePreview";
function MainPage() {
  return (
    <div className={styles.mainPage}>
      <PromoDiscounts />
      <CategoriesPreview />
      <FormFirstOrder />
      <SalePreview />
    </div>
  );
}
export default MainPage;
