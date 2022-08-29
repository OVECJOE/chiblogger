const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: 'http://localhost:3000',
    },
});

io.on('connection', socket => {
    console.log('Connected to socket.io');
});

const PORT = process.env.PORT || 5000;

// server listening
server.listen(PORT, () => {
    console.log(`chiblogger server running on PORT ${PORT}...`);
});
