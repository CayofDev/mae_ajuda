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
        return;
      }
      console.log("Conectado ao MySQL!");
    });
  }

  // Método para executar uma consulta
  executeQuery(query, callback) {
    this.connection.query(query, (err, results) => {
      if (err) {
        console.error("Erro na consulta: ", err);
        return callback(err); // Chama o callback com o erro
      }

      callback(null, results); // Chama o callback sem erro, passando os resultados
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
