import Button from "@/components/button/button";
import styles from "@/styles/layout.module.css";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Button className={styles.seta}> Voltar </Button>
      {children}
    </div>
  );
}
