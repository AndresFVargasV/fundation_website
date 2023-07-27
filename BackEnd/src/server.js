const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const customerRoutes = require('./routes');


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/', customerRoutes);

// Static files
app.use(express.static(__dirname + '/public'));

// Starting the server
const port = 3000;
app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});