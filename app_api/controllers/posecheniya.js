let mongoose = require('mongoose');
let posecheniya = mongoose.model('posecheniya');
let token = mongoose.model('token');
const h = require('../helpers/common');

module.exports.getAll = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    posecheniya.find({}, (err, posecheniya) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, posecheniya);
    });
};

module.exports.getOne = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    posecheniya.findById(req.params.id, (err, posecheniya) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, posecheniya);
    });
};

module.exports.create = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    // вот тут ошибка, например...
    // h.sendJsonResponse(res,406, {status: "error", message: "какая-то ошибка"});

    posecheniya.create(req.body, (err, posecheniya) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,201, posecheniya);
    });
};

module.exports.update = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    posecheniya.findById(req.params.id, (err, posecheniya) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }

        if(req.body.fio){
            posecheniya.fio = req.body.fio;
        }
        if(req.body.adress){
            posecheniya.adress = req.body.adress;
        }
        if(req.body.doctor){
            posecheniya.doctor = req.body.doctor;
        }
        if(req.body.snils){
            posecheniya.snils = req.body.snils;
        }
        if(req.body.passport){
            posecheniya.passport = req.body.passport;
        }
        if(req.body.datePosesh){
            posecheniya.datePosesh = req.body.datePosesh;
        }
        if(req.body.dateofbirth){
            posecheniya.dateofbirth = req.body.dateofbirth;
        }
        if(req.body.marker){
            posecheniya.marker = req.body.marker;
        }

        posecheniya.save((err, posecheniya) => {
            if(err){
                h.sendJsonResponse(res,400, err);
            }
            h.sendJsonResponse(res,200, posecheniya);
        });

    });

};

module.exports.delete = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    posecheniya.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,204, null);
    });
};