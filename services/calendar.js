import { Connection } from "../scripts/mysqlConnection.mjs";

// Cria uma instância da classe Connection
const connection = new Connection();

// Conecta ao banco de dados
connection.connect();

export async function newConsulta(body) {
  if (
    !body.usuarioCPF ||
    !body.profissionalCPF ||
    !body.data ||
    !body.hora ||
    !body.status
  ) {
    throw new Error("Parâmetros inválidos na requisição POST.");
  }

  const query = `
        INSERT INTO Eventos (Usuario_CPF, Profissional_CPF, Data, Hora, Status)
        VALUES ('${body.usuarioCPF}', '${body.profissionalCPF}', '${body.data}', '${body.hora}', '${body.status}')
      `;

  connection.executeQuery(query, (err, results) => {
    if (err) {
      console.error("Erro ao inserir dados na tabela Eventos:", err);
      throw new Error("Erro ao inserir dados na tabela Eventos.");
    }

    console.log("Inserido com sucesso");
    connection.closeConnection();
  });
}
