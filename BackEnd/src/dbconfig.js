const sql = require('mssql');

const dbConfig = {
  user: '',
  password: '',
  server: '',
  database: '',
};

const pool = new sql.ConnectionPool(dbConfig);

async function connectToDatabase() {
    try {
      const poolConnect = await pool.connect();
      console.log('Conexión exitosa a la base de datos');
    } catch (err) {
      console.error('Error al conectar a la base de datos:', err.message);
    }
}


module.exports = {pool, connectToDatabase};
