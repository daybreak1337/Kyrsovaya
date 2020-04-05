let mongoose = require('mongoose');
let practic = mongoose.model('practic');
let token = mongoose.model('token');
const h = require('../helpers/common');

module.exports.getAll = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    practic.find({}, (err, practics) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, practics);
    });
};

module.exports.getOne = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    practic.findById(req.params.id, (err, practic) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, practic);
    });
};

module.exports.create = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    // вот тут ошибка, например...
    // h.sendJsonResponse(res,406, {status: "error", message: "какая-то ошибка"});

    practic.create(req.body, (err, practic) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,201, practic);
    });
};

module.exports.update = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    practic.findById(req.params.id, (err, practic) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }

        if(req.body.name){
            practic.name = req.body.name;
        }
        if(req.body.address){
            practic.address = req.body.address;
        }
        if(req.body.doctor){
            practic.doctor = req.body.doctor;
        }
        if(req.body.group){
            practic.group = req.body.group;
        }
        if(req.body.spec){
            practic.spec = req.body.spec;
        }
        if(req.body.dateStart){
            practic.dateStart = req.body.dateStart;
        }
        if(req.body.dateFinish){
            practic.dateFinish = req.body.dateFinish;
        }
        if(req.body.mark){
            practic.mark = req.body.mark;
        }

        practic.save((err, practic) => {
            if(err){
                h.sendJsonResponse(res,400, err);
            }
            h.sendJsonResponse(res,200, practic);
        });

    });

};

module.exports.delete = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    practic.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,204, null);
    });
};