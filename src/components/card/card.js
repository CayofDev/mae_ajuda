import styles from "./card.module.css";
import Image from "next/image";

export default function Card({ children, ...props }) {
  return (
    <div className={styles.card}>
      <Image {...props} />
      <p>{children}</p>
    </div>
  );
}
