const sql = require('mssql');

const dbConfig = {
  user: 'adminacor',
  password: 'acor2023*',
  server: 'adminacor.database.windows.net',
  database: 'dbacor',
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