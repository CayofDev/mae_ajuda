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
// const teste = (Pessoa, body) => {
//   const query2 = `SELECT * FROM Profissional WHERE cpf = "${Pessoa[0].CPF}"`;
//   let user = {};
//   connection.executeQuery(query2, (err, results) => {
//     user = results;
//     if (!user) throw new Error("Email fornecido não é de um profissional");
//     if (user[0].senha !== body.password) throw new Error("Senha incorreta");
//     console.log("logado com sucesso");
//     console.log(JSON.stringify(user));
//     return user;
//   });
// };
export async function login(body) {
  if (!body.cpf || !body.password)
    throw new Error("Parâmetros inválidos na requisição GET.");

  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Profissional WHERE cpf = '${body.cpf}'`;

    connection.executeQuery(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        const user = !results ? null : results;

        if (!user) {
          reject(new Error("CPF fornecido não é de um profissional"));
        } else if (user[0].senha !== body.password) {
          reject(new Error("Senha incorreta"));
        } else {
          connection.closeConnection();
          // console.log("Usuário autenticado:", JSON.stringify(user));
          resolve(user);
        }
      }
    });
  });
}
