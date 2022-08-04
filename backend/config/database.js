const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URI,
	useFindAndModify: false,
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
	server: {
	    socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } 
	},
	replset: {
	    socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } 
	}
    ).then(() => {
        console.log('Successfully connected to database.');
    })
    .catch((err) => {
        console.log('Database connection failed. exiting now...');
        console.log(`Error: ${err.message}`);
        process.exit(1);
    });
};
