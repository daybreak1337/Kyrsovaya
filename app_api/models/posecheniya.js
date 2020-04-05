let mongoose = require( 'mongoose' );

let posecheniyaSchema = new mongoose.Schema({
    fio: {type: String, required: true},
    adress: {type: String, required: true, default: "Неизвестный Адрес"},
    doctor: {type: String, required: true},
    snils: {type: String, required: true},
    passport: {type: String, required: true},
    datePosesh: {type: Date, required: true, default: Date.now},
    dateofbirth: {type: Date, required: true},
    marker: {type: Number, required: true},
    userId: {type: Number, required: false}
});

mongoose.model('posecheniya', posecheniyaSchema );

