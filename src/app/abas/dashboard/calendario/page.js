"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "@/styles/calendario.module.css";
import Input from "@/components/input/Input";
import Button from "@/components/button/button";
import Image from "next/image";

export default function CalendarGfg() {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <Input className={styles.busca} type="text"></Input>
      </div>
      <div className={styles.consultas}>
        <Button className={styles.consulta} type="button">
          NOVA CONSULTA
        </Button>
        <Button className={styles.consulta} type="button">
          SOLICITAÇOES
        </Button>
        <Button className={styles.consulta} type="button">
          HISTÓRICO
          <Image></Image>
        </Button>
      </div>
      <div className={styles.calendar}>
        <Calendar className={styles.objeto} onChange={onChange} value={value} />
      </div>
      <div className={styles.aviso}>
        <p>
          Nesta aba, é possível analisar as solicitações enviadas pelos
          responsáveis para desfazer o agendamento de consulta na aba
          “solicitações” e visualizar as que já foram desmarcadas na aba
          “cancelamentos”.
        </p>
      </div>
    </div>
  );
}
