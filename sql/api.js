const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'den1.mysql3.gear.host',
        user: 'sddb4444',
        password: 'Rf4TG_ndy98!',
        database: 'sddb4444'
      })
      return this.pool
    }
    return this.pool
  }
}

const instance = new Connection();

module.exports = instance;