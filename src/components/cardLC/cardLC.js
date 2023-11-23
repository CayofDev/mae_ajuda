import styles from "./cardLC.module.css";
import ImgBg from "../../components/imgbg/imgBg";
import Image from "next/image";
import localImageLogo from "@../../public/logoLogin.svg";

export default function cardLC({ children }) {
  return (
    <div className={styles.loginContent}>
      <ImgBg />
      <div className={styles.loginMain}>
        <Image
          src={localImageLogo}
          alt="Mae Ajuda"
          style={styles.logo}
          className={styles.logo}
          width={200}
          height={200}
        />
        {children}
      </div>
    </div>
  );
}
