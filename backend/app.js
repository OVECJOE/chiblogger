require('dotenv').config();
require('./config/database').connect();

const express = require('express');
const path = require('path');

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const notificationsRouter = require('./routes/notifications');

const app = express();
app.use(express.json());

// Defining routes
app.use('/api/users', usersRouter);
app.use('/api/articles', postsRouter);
app.use('/api/notifications', notificationsRouter);

// ---------------------DEPLOYMENT CODE-------------------
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname1, '/frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname1, 'frontend', 'build', 'index.html')
        );
    });
} else {
    app.get('/', (req, res) => {
        res.send('API is Running Successfully');
    });
}
// ---------------------DEPLOYMENT CODE-------------------


app.get('*', (req, res) => {
    res.status(404).send({
        error: 'This route is not defined by the server'
    });
})

module.exports = app;
