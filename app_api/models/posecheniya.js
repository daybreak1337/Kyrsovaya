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

// компиляция модели
mongoose.model('posecheniya', posecheniyaSchema );

// наименование: "по ПМ.02 Осуществление интеграции программных модулей"
// обучающийся: "Фамилия Имя Отчество"
// Снилс: "3ИСиП-17-1"
// Номер Паспорта: "09.02.07 Информационные системы и программирование"
// Дата посещения: "«23» сентября 2019 г."
// дата окончания: "«12»  октября 2019 г."
// общая оценка: "4"
// Адрес: "ФИО"