import Link from "next/link";
import styles from "@/styles/abas.module.css";

import localImageLogo from "@../../public/checklist.svg";
import localImageCalendario from "@../../public/calendario.svg";
import localImageConversas from "@../../public/conversas.svg";
import localImageCadastros from "@../../public/cadastros.svg";

import Card from "@/components/card/card";

export default function abas() {
  return (
    <div className={styles.main}>
      <Link className={styles.card} href="/checklist">
        <Card
          src={localImageLogo}
          alt="Chaecklist"
          style={styles.logo}
          className={styles.logo}
          width={172}
          height={147}
        >
          CHECKLIST
        </Card>
      </Link>
      <Link className={styles.card} href="/calendario">
        <Card
          src={localImageCalendario}
          alt="Calendario"
          style={styles.logo}
          className={styles.logo}
          width={172}
          height={147}
        >
          CALENDARIO
        </Card>
      </Link>
      <Link className={styles.card} href="/conversas">
        <Card
          src={localImageConversas}
          alt="Conversas"
          style={styles.logo}
          className={styles.logo}
          width={172}
          height={147}
        >
          CONVERSAS
        </Card>
      </Link>
      <Link className={styles.card} href="/cadastros">
        <Card
          src={localImageCadastros}
          alt="Cadastros"
          style={styles.logo}
          className={styles.logo}
          width={172}
          height={147}
        >
          CADASTROS
        </Card>
      </Link>
    </div>
  );
}
