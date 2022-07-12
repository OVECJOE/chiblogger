const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        console.log('Successfully connected to database.');
    })
    .catch((err) => {
        console.log('Database connection failed. exiting now...');
        console.log(`Error: ${err.message}`);
        process.exit(1);
    });
};