let mongoose = require('mongoose');

let configSchema = new mongoose.Schema({
    key: {type: String, required: true},
    value: {type: String, required: true}
});

// компиляция модели
mongoose.model('config', configSchema );

// ключ: "шапка титульного листа"
// значение: "МИНИСТЕРСТВО ОБРАЗОВАНИЯ, НАУКИ И МОЛОДЁЖНОЙ ПОЛИТИКИ НИЖЕГОРОДСКОЙ ОБЛАСТИ
// ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ
// «НИЖЕГОРОДСКИЙ РАДИОТЕХНИЧЕСКИЙ КОЛЛЕДЖ»"