import { Inter } from "next/font/google";
import "../styles/globals.css";
import styles from "../styles/page.module.css";
import localImage from "../../public/logo.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <a>
              <Image src={localImage} alt="Mae Ajuda" width={173} height={27} />
            </a>

            <div className={styles.selects}>
              <label className={styles.none}>COMO USAR</label>
              <select className={styles.select} name="comoUsar" id="comoUsar">
                <option value="como " selected>
                  COMO USAR
                </option>
              </select>
              <label className={styles.none}>SUPORTE</label>
              <select className={styles.select} name="suporte" id="suporte">
                <option value="suporte" selected>
                  SUPORTE
                </option>
              </select>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}