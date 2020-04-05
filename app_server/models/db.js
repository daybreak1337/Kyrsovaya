let mongoose = require( 'mongoose' );
var debug = require('debug')('pks16-2_kr:server');

let dbURI = 'mongodb://localhost/nntc';

mongoose.connect(dbURI);

let readLine = require( 'readline' );

if(process.platform === "win32"){
    let rl = readLine.createInterface({
       input: process.stdin,
       output: process.stdout
    });
    rl.on("SIGINT", () => {
       process.emit("SIGINT");
    });
}

mongoose.connection.on('connected', () => {
    debug('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', (err) => {
    debug('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    debug('Mongoose disconnected');
});

let gracefullShutdown = function (msg, callback) {
  mongoose.connection.close(() => {
     debug('Mongoose connection closed with msg: ' + msg);
     callback();
  });
};

process.once('SIGUSR2', () => {
    gracefullShutdown('received signal SIGUSR2', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', () => {
    gracefullShutdown('received signal SIGINT', () => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    gracefullShutdown('received signal SIGTERM', () => {
        process.exit(0);
    });
});

require('./config');
require('./posecheniya');