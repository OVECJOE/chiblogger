require('dotenv').config();
require('./config/database').connect();

const express = require('express');

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();
app.use(express.json());

// Defining routes
app.use('/api/users', usersRouter);
app.use('/api/articles', postsRouter);

app.get('*', (req, res) => {
    res.status(404).send({
        error: 'This route is not defined by the server'
    });
})

module.exports = app;
