import styles from "./styles.module.css";
import Insta from "../../assets/icons/ic-instagram.svg";
import Watsup from "../../assets/icons/ic-whatsapp.svg";
import Map from "../../components/Map";
function Footer() {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <div className={styles.footer}>
        <div className={`${styles.footerCard1} ${styles.left}`}>
          <span className={styles.heading}>Phone</span>
          <span className={styles.mainText}>+49 30 915-88492</span>
        </div>
        <div className={`${styles.footerCard1} ${styles.right}`}>
          <span className={styles.heading}>Socials</span>
          <div className={styles.icons}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Insta} alt="insta" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Watsup} alt="watsup" />
            </a>
          </div>
        </div>
        <div className={`${styles.footerCard2} ${styles.left}`}>
          <span className={styles.heading}>Address</span>
          <span className={styles.mainText}>
            Wallstraẞe 9-13, 10179 Berlin, Deutschland
          </span>
        </div>
        <div className={`${styles.footerCard2} ${styles.right}`}>
          <span className={styles.heading}>Working Hours</span>
          <span className={styles.mainText}>24 hours a day</span>
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  );
}
export default Footer;
