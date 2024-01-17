import mysql from "mysql2";
class Connection {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "cayo",
      password: "cayo",
      database: "mae_ajuda",
    });
  }

  // Método para conectar ao banco de dados
  connect() {
    this.connection.connect((err) => {
      if (err) {
        console.error("Erro ao conectar: ", err);
        exit(1);
        return;
      }
      console.log("Conectado ao MySQL!");
    });
  }

  // Método para executar uma consulta
  executeQuery(query, callback) {
    this.connection.query(query, (err, results) => {
      if (err) {
        // Trata o erro específico quando um e-mail já existe
        if (err.code === "ER_DUP_ENTRY") {
          // Erro de entrada duplicada, ou seja, e-mail já existente
          const emailError = new Error("E-mail já cadastrado");
          return callback(emailError);
        }

        // Trata outros erros
        console.error("Erro na consulta: ", err);
        return callback(err);
      }

      callback(null, results);
    });
  }

  // Método para fechar a conexão
  closeConnection() {
    this.connection.end((err) => {
      if (err) {
        console.error("Erro ao fechar a conexão: ", err);
        return;
      }
      console.log("Conexão fechada.");
    });
  }
}
// Exporte a classe diretamente, sem usar 'default'
export { Connection };
// module.exports = Connection;
// export default Connection;
