// Importa a classe Connection corretamente
import { Connection } from "../scripts/mysqlConnection.mjs";

// Cria uma instância da classe Connection
const connection = new Connection();

// Conecta ao banco de dados
connection.connect();

// Consulta
const query = "SELECT * FROM Eventos";
// Executa a consulta e manipula os resultados

export default function teste(Pessoa) {
  const query2 = `SELECT * FROM Profissional WHERE CPF = '${Pessoa.cpf}'`;
  connection.executeQuery(query2, (err, results) => {
    const user = !results ? null : results;
    if (!user) {
      return null;
    }
    connection.closeConnection();
  });
  return user;
}
