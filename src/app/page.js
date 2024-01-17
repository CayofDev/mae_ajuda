"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";

import CardLC from "@/components/cardLC/cardLC";
import Input from "../components/input/Input";
import Link from "next/link";
import Button from "@/components/button/button";
import styles from "../components/Form/form.module.css";

export default function Inicial() {
  const [formData, setForm] = useState({
    cpf: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const handleChangeForm = (event, field) => {
    setForm({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.cpf) return setError("O cpf é obrigatório");
    if (!formData.password) return setError("a senha é obrigatório");
    setError("");

    try {
      const response = await fetch(`/api/user/POST`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const objeto = await response.json();
      console.log("Aqui" + JSON.stringify(objeto));
      if (response.error === null) throw new Error(objeto);
      // setCookie("authorization", json);
      router.push("/abas/");
    } catch (err) {
      setError(err.message);
    }
  };
  // Handle response if necessary
  // console.log(await JSON.stringify(user));
  // if (user.error) {
  //   alert("Usuraio não encontrado");
  // } else if (user) {
  // cookies.set("nome", user);
  // console.log(JSON.stringify(Cookies.get("nome")));
  // }
  // ...
  return (
    <CardLC>
      <form className={styles.form}>
        <Input
          type="text"
          placeholder="CPF do Profissional"
          value={formData["cpf"]}
          onChange={(event) => handleChangeForm(event, "cpf")}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={formData["password"]}
          onChange={(event) => handleChangeForm(event, "password")}
        />
        <div className={styles.check}>
          <Input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className={styles.label} selected>
            Lembre-se de mim
          </label>
          <Link className={styles.esqueciSenha} href="/esqueciSenha">
            Esqueci minha senha
          </Link>
        </div>
        <Button onClick={handleSubmit}>Entrar</Button>
        {error && <p className="error">{error}</p>}
        <div className={styles.linkCadastro}>
          <p>Novo aqui?</p>
          <Link className={styles.link} href="/cadastrar">
            Cadastre-se agora
          </Link>
        </div>
      </form>
    </CardLC>
  );
}
