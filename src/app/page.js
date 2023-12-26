// Seu arquivo inicial.js
"use client";

import { useRouter } from "next/navigation";
import MyForm from "@/components/Form/form";
import CardLC from "@/components/cardLC/cardLC";

export default function Inicial() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    console.log("teste");
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch("/api/user/POST", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const user = await response.json();
    if (user) {
      router.push("/abas/dashboard");
    }
    // ...
  };

  return (
    <CardLC>
      <MyForm onSubmit={handleSubmit}></MyForm>
    </CardLC>
  );
}
