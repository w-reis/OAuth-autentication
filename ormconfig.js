const config = require('./src/config')

module.exports = {
  "type": config.default.db.type,
  "host": config.default.db.host,
  "port": config.default.db.port,
  "username": config.default.db.username,
  "password": config.default.db.password,
  "database": config.default.db.database,
}
