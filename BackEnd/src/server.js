const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const customerRoutes = require('./routes');



app.set('port', process.env.PORT || 3000);


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


app.use(cors());
app.use('/', customerRoutes);


const port = 3000;
app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});