const {pool, connectToDatabase} = require('../dbconfig');    

async function Login(Email, Password) {
    try {

      await connectToDatabase();


      const query = `
        SELECT * FROM usuarios WHERE email = @Email AND pass = @Password
      `;


      const result = await pool
        .request()
        .input('Email', sql.VarChar, Email)
        .input('Password', sql.VarChar, Password)
        .query(query);

      if (result.recordset.length === 1) {      
        return True;
      } else {
        return False;
      }

    } catch (err) {
      console.error('Error al verificar el inicio de sesión:', err.message);
      return null;
    } finally {

      pool.close();
    }
  }

  module.exports = Login;