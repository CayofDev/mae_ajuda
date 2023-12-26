import { Connection } from "../scripts/mysqlConnection.mjs";

// Cria uma instância da classe Connection
const connection = new Connection();

// Conecta ao banco de dados
connection.connect();

// Consulta
// const query = `INSERT INTO Pessoa (CPF, Email, Telefone, Nome)
// VALUES ('12345678901', 'joao@email.com', '123-456-7890', 'João Silva'),
//        ('98765432101', 'maria@email.com', '987-654-3210', 'Maria Souza'),
//        ('11122233344', 'carlos@email.com', '111-222-3334', 'Carlos Oliveira');`;

// const query = `SELECT * FROM Pessoa`;
// const query = `INSERT INTO Medico (CPF, ESPECIALIDADE)
// VALUES ('11122233344', 'Cardiologia');`;

// // Executa a consulta e manipula os resultados
// connection.executeQuery(query, (results) => {
//   // Lógica adicional após a consulta, se necessário
//   console.log("Resultados da consulta:", results);

//   // Fechar a conexão após a consulta
//   connection.closeConnection();
// });

//teste
let users = [];

export async function cadastro(body) {
  const query = `INSERT INTO Pessoa (CPF, Email, Telefone, Nome) VALUES ('${body.cpf}', '${body.email}', '${body.telefone}', '${body.nome}');`;
  connection.executeQuery(query, (err, results) => {
    console.log("Inserido com sucesso");
    connection.closeConnection();
  });
  return body;
}

export async function login(body) {
  if (!body.email || !body.password)
    throw new Error("Parâmetros inválidos na requisição GET.");
  const query = `SELECT * FROM Pessoa WHERE Email = '${body.email}'`;
  connection.executeQuery(query, (err, results) => {
    const user = !results ? NULL : results;
    if (!user) throw new Error("Email não cadastrado");
    if (user.password !== body.password) throw new Error("Senha incorreta");
    console.log("Inserido com sucesso");
    connection.closeConnection();
  });
  return user;
}
