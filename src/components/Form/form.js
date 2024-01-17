import Link from "next/link";
import Input from "../input/Input";
import Button from "../button/button";
import styles from "./form.module.css";

// components/MyForm.js
const MyForm = ({ onSubmit, formData }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        type="text"
        placeHolder="E-mail / CPF do Profissional"
        required
        value={formData.nome}
      />
      <Input
        type="password"
        placeHolder="Senha"
        required
        value={formData.password}
      />
      <div className={styles.check}>
        <Input type="checkbox" id="checkbox" />
        <label for="checkbox" className={styles.label}>
          Lembre-se de mim
        </label>
        <Link className={styles.esqueciSenha} href="/esqueciSenha">
          Esqueci minha senha
        </Link>
      </div>
      <Button>Entrar</Button>
      <div className={styles.linkCadastro}>
        <p>Novo aqui?</p>
        <Link className={styles.link} href="/cadastrar">
          Cadastre-se agora
        </Link>
      </div>
    </form>
  );
};

export default MyForm;
