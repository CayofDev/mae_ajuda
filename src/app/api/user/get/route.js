import { login } from "../../../../../services/user";
import { NextResponse, NextRequest } from "next/server";
export async function POST(request) {
  try {
    const requestBody = await request.json(); // Ou use request.headers, dependendo de como está passando os dados no GET
    // console.log(request.query);
    // Verifique se 'email' e 'password' existem e estão não vazios
    // if (!email || !password) {
    //   throw new Error("Parâmetros inválidos na requisição GET.");
    // }
    console.log(requestBody);
    const user = await login(requestBody);
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
