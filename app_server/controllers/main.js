let mongoose = require('mongoose');

//let config = mongoose.model('config');
//let practic = mongoose.model('practic');

module.exports.index = (req, res, next) => {

    // основные операции с данными с MongoDB

    // // создание записи в коллекции config:
    //
    // // объект для вставки в базу данных
    // let configRecord = {
    //     key: "шапка титульного листа",
    //     value: "МИНИСТЕРСТВО ОБРАЗОВАНИЯ, НАУКИ И МОЛОДЁЖНОЙ ПОЛИТИКИ НИЖЕГОРОДСКОЙ ОБЛАСТИ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ «НИЖЕГОРОДСКИЙ РАДИОТЕХНИЧЕСКИЙ КОЛЛЕДЖ»"
    // };
    //
    // // вызываем метод create модели config
    // config.create(configRecord, (err, config) => {
    //     // коллбэк при добавлении данных
    //     if(err){
    //         // если есть о
    //         res.render('index', { title: 'ERROR: ' + err });
    //     }
    //
    //     res.render('index', { title: 'CREATE OK: ' + JSON.stringify(config) });
    //
    // });

    // создание записи в коллекции practic:

    // // объект для вставки в базу данных
    // let practicRecord = {
    //     fio: "по ПМ.02 Осуществление интеграции программных модулей",
    //     //adress: ,
    //     doctor: "Фамилия Имя Отчество",
    //     snils: "3ИСиП-17-1",
    //     passport: "09.02.07 Информационные системы и программирование",
    //     //datePosesh: ,
    //     dateofbirth: Date.now()+6*24*60*60*1000,
    //     marker: "0"
    // };
    //
    // // вызываем метод create модели config
    // practic.create(practicRecord, (err, config) => {
    //     // коллбэк при добавлении данных
    //     if(err){
    //         // если есть о
    //         res.render('index', { title: 'ERROR: ' + err });
    //     }
    //
    //     res.render('index', { title: 'CREATE OK: ' + JSON.stringify(config) });
    //
    // });

    // изменение записи в коллекции practic:
    // practic.deleteMany({adress: "Неизвестный Адрес"}, (err) => {
    //         // коллбэк при удалении данных
    //         if (err) {
    //             // если есть ошибка
    //             res.render('index', {title: 'DELETE ERROR: ' + err});
    //         }
    //
    //         res.render('index', {title: 'DELETE OK.'});
    //     }
    // );


    res.render('index', {title: 'INFO: Смотрите закомментированный код в этом контроллере для изучения операций создания записей в коллекциях MongoDB'});

};