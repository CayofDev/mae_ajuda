import { login } from "../../../../../services/user";
import { NextResponse, NextRequest } from "next/server";
export async function POST(request) {
  try {
    const requestBody = await request.json(); // Ou use request.headers, dependendo de como está passando os dados no GET
    console.log(requestBody.cpf);
    if (!requestBody.cpf || !requestBody.password)
      throw new Error("Parâmetros inválidos na requisição POST.");

    const user = await login(requestBody);
    console.log(user);
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ error: err.message });
    // return NextResponse.redirect("/abas");
  }
}
