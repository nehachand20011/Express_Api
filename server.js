const express = require('express');
const app = express();
require('dotenv').config();

// app.get('/', (request, response) => {
//     response.send('Welcome to Express.js');
// });

const testRoute = require('./routes/testRoute'); // Correct the import statement
const morgan = require('morgan');

// Middleware
app.use(morgan('dev'));

// Routes middleware
app.use('/api', testRoute);

const port = process.env.PORT ||5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
