// Importa a classe Connection corretamente
import { Connection } from "../scripts/mysqlConnection.mjs";

// Cria uma instância da classe Connection
const connection = new Connection();

// Conecta ao banco de dados
connection.connect();

// Consulta
const query = "SELECT * FROM Eventos";
// Executa a consulta e manipula os resultados
connection.executeQuery(query, (results) => {
  // Lógica adicional após a consulta, se necessário
  console.log("Resultados da consulta:", results);

  // Fechar a conexão após a consulta
  connection.closeConnection();
});
