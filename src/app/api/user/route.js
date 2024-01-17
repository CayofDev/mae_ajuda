import { cadastro } from "../../../../services/user";
import { login } from "../../../../services/user";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  try {
    const requestBody = await req.json();

    const user = await cadastro(requestBody);
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}

export async function GET(request) {
  try {
    const { email, password } = request.headers; // Ou use request.headers, dependendo de como está passando os dados no GET
    // console.log(request.query);
    // Verifique se 'email' e 'password' existem e estão não vazios
    if (!email || !password) {
      throw new Error("Parâmetros inválidos na requisição GET.");
    }

    const user = await login({ email, password });
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
