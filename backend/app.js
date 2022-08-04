require('dotenv').config();
require('./config/database').connect();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', ],
    optionsSuccessStatus: 200
}));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

// Defining routes
app.use('/api/users', usersRouter);
app.use('/api/articles', postsRouter);

app.get('*', (req, res) => {
    res.status(404).send({
        error: 'This route is not defined by the server'
    });
})

module.exports = app;
