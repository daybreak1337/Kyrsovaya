let mongoose = require( 'mongoose' );

let tokenSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    token: {type: String, required: true},
    expired: {type: Number, required: true}
});

mongoose.model('token', tokenSchema );