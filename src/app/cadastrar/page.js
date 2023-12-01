import Link from "next/link";
import CardLC from "@/components/cardLC/cardLC";
import Input from "@/components/input/Input";

export default function cadastrar() {
  return (
    <CardLC>
      <Input type="text" placeHolder="E-mail / CPF do Profissional" />
      <Input type="password" placeHolder="Senha" />
      <Link href="/cadastrar">valor</Link>
    </CardLC>
  );
}
