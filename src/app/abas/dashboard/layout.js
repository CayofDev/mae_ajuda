import Button from "@/components/button/button";
import styles from "@/styles/layout.module.css";

export default function RootLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Button> Voltar </Button>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
