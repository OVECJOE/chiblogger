const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

// server listening
server.listen(PORT, () => {
    console.log(`chiblogger server running on PORT ${PORT}...`);
});
