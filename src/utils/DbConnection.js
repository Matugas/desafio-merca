const { Client } = require("pg");
const mysql = require("mysql2");
const dbConfig = require("../configs/database.config");

class DbConnection {
  static mySqlConn = null;
  static pgSqlConn = null;

  static connections = {};

  static async getMySqlConnection(client) {
    if (this.connections[client] != null) return this.connections[client];

    const { host, database, user, password } = dbConfig[client];
    this.connections[client] = mysql.createConnection({
      host: host,
      database: database,
      user: user,
      password: password,
    });

    return this.connections[client];
  }

  static async getPgSqlConnection(client) {
    if (this.connections[client] != null) return this.connections[client];

    const { host, database, user, password } = dbConfig[client];
    this.connections[client] = new Client({
      host: host,
      database: database,
      user: user,
      password: password,
    });

    await this.connections[client].connect();
    return this.connections[client];
  }

  static closeMySqlConnection(client) {
    const conn = this.connections[client];
    if (conn != null) {
      conn.end();
      conn = null;
    }
  }

  static closePgSqlConnection(client) {
    const conn = this.connections[client];
    if (conn != null) {
      conn.end();
      conn = null;
    }
  }
}

module.exports = DbConnection;
