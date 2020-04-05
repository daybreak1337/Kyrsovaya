let mongoose = require( 'mongoose' );

let practicSchema = new mongoose.Schema({
    fio: {type: String, required: true},
    adress: {type: String, required: true, default: "Неизвестный руководитель"},
    doctor: {type: String, required: true},
    snils: {type: String, required: true},
    passport: {type: String, required: true},
    datePosesh: {type: Date, required: true, default: Date.now},
    dateofbirth: {type: Date, required: true},
    marker: {type: Number, required: true},
    userId: {type: Number, required: false}
});

// компиляция модели
mongoose.model('practic', practicSchema );

// наименование: "по ПМ.02 Осуществление интеграции программных модулей"
// обучающийся: "Фамилия Имя Отчество"
// группа: "3ИСиП-17-1"
// специальность: "09.02.07 Информационные системы и программирование"
// дата начала: "«23» сентября 2019 г."
// дата окончания: "«12»  октября 2019 г."
// общая оценка: "4"
// руководитель: "ФИО"