const { Client } = require("pg");
const mysql = require("mysql2");
const dbConfig = require("../configs/database.config");

class DbConnection {
  static connections = {};

  static async getMySqlConnection(client) {
    if (this.connections[client] != null) return this.connections[client];

    this.connections[client] = mysql.createConnection(dbConfig[client].stringConnection);

    return this.connections[client];
  }

  static async getPgSqlClient(client) {
    if (this.connections[client] != null) return this.connections[client];

    this.connections[client] = new Client(dbConfig[client].stringConnection);

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
