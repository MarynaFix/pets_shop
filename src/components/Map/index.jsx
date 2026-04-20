import styles from "./styles.module.css";
function Map() {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.231805581288!2d13.404478599999997!3d52.5111439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27db4748a5%3A0x1d538c01013c2c7!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin!5e0!3m2!1sru!2sde!4v1776677180820!5m2!1sru!2sde"
        width="1360"
        height="350"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export default Map;
