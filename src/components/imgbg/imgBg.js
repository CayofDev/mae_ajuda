import Image from "next/image";
import styles from "./imgBg.module.css";
import localImage from "../../../public/logoBG.png";

export default function imgBg() {
  return (
    <div className={styles.loginImgBg}>
      <Image
        src={localImage}
        alt="Mae Ajuda"
        style={styles.img}
        width={907}
        height={976}
      />
    </div>
  );
}
