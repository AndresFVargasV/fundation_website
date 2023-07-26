const {pool, connectToDatabase} = require('./dbconfig');    

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

      sql.close();
    }
  }
  

async function Register(Email, Password, Nombre, Apellido, Telefono, Direccion) {
    try {
        await connectToDatabase();

        
        const query = `
          INSERT INTO usuarios (name, last_name, userId, pass, document, documentType, email, phone, user_type)
          VALUES (@Nombre, @Apellido, @Email, @Password, @Telefono, @Direccion, @TipoDocumento, @NumeroDocumento, @TipoUsuario)
        `;
    
        
        const result = await pool
          .request()
          .input('Nombre', sql.VarChar, Nombre)
          .input('Apellido', sql.VarChar, Apellido)
          .input('Email', sql.VarChar, Email)
          .input('Password', sql.VarChar, Password)
          .input('Telefono', sql.VarChar, Telefono)
          .input('Direccion', sql.VarChar, Direccion)
          .input('TipoDocumento', sql.VarChar, 'DNI')
          .input('NumeroDocumento', sql.VarChar, '123456789') 
          .input('TipoUsuario', sql.VarChar, 'Cliente')
          .query(query);

          console.log('Usuario registrado con éxito:', result.rowsAffected[0]);
    } catch (err) {
        console.error('Error al registrar usuario en la base de datos:', err.message);
    } finally {
        pool.close();
    }
};


