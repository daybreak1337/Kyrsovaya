let mongoose = require( 'mongoose' );

let userSchema = new mongoose.Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});


// компиляция модели
mongoose.model('user', userSchema );