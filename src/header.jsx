import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faFillDrip} from '@fortawesome/free-solid-svg-icons'
import Time from "./time.jsx";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <Time></Time>
      <div className={styles.camera}>
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="rgb(28,28,28)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        </svg>{" "}
      </div>
      <div className={styles.logo}>
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="#ffffff"
            d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
          />
        </svg>

        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="#ffffff"
            d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm368 96H96V320H448V192z"
          />
        </svg>
      </div>
    </div>
  );
};
export default Header;
