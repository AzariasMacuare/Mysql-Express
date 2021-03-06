// Modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('../routes/index.routes'));

// Server Listening on Port
app.listen(app.get('port'), () => {
    console.log('Server run on port', app.get('port'));
});