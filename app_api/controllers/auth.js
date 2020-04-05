

let mongoose = require('mongoose');
let user = mongoose.model('user');
let token = mongoose.model('token');
const crypto = require('crypto');
const h = require('../helpers/common');


module.exports.signup = (req, res) => {

    if (!req.body.login) {
        h.sendJsonResponse(res, 500, {error: 'field "login" required'});
        return;
    }

    if (!req.body.password) {
        h.sendJsonResponse(res, 500, {error: 'field "password" required'});
        return;
    }

    const login = req.body.login;

    user.findOne({login: login}, (err, userEx) => {
        if (err) {
            h.sendJsonResponse(res, 500, err);
            return;
        }
        if (userEx) {
            h.sendJsonResponse(res, 500, {error: 'user already exist'});
            return;
        }

        const password = req.body.password;
        const passwdSalt = (process.env.PASSWD_SALT) ? process.env.PASSWD_SALT : 'defaultPasswdSalt';
        const passwordHash = crypto
            .createHash('sha256')
            .update(password + passwdSalt)
            .digest('base64');

        user.create({login: login, password: passwordHash}, (err, userEx) => {

            if (err) {
                h.sendJsonResponse(res, 500, err);
                return;
            }

            h.sendJsonResponse(res, 201, {success: 'created'});
        });

    });

};

module.exports.login = (req, res) => {

    if (!req.body.login) {
        h.sendJsonResponse(res, 500, {error: 'field "login" required'});
        return;
    }

    if (!req.body.password) {
        h.sendJsonResponse(res, 500, {error: 'field "password" required'});
        return;
    }

    const login = req.body.login;

    user.findOne({login: login}, (err, userEx) => {
        if (err) {
            h.sendJsonResponse(res, 500, err);
            return;
        }
        if (!userEx) {
            h.sendJsonResponse(res, 404, {error: 'user does not exist'});
            return;
        }

        const password = req.body.password;
        const passwdSalt = (process.env.PASSWD_SALT) ? process.env.PASSWD_SALT : 'defaultPasswdSalt';
        const passwordHash = crypto
            .createHash('sha256')
            .update(password + passwdSalt)
            .digest('base64');

        if (userEx.password !== passwordHash){
            h.sendJsonResponse(res, 401, {error: 'unauthorized'});
            return;
        }

        token.deleteMany({userId: userEx._id}, err => {
            if (err) {
                h.sendJsonResponse(res, 500, err);
                return;
            }

            const tokenValue = crypto
                .createHash('sha256')
                .update(passwordHash + Date.now())
                .digest('base64');

            const now = Date.now();
            const tokenTTL = (process.env.TOKENTTLMINUTES) ? parseInt(process.env.TOKENTTLMINUTES) : 1;
            const expired = now + tokenTTL * 60 * 1000;

            token.create({
                userId: userEx._id,
                token: tokenValue,
                expired: expired
            }, (err, tokenEx) => {
                if (err) {
                    h.sendJsonResponse(res, 500, err);
                    return;
                }
                h.sendJsonResponse(res, 200, {token: tokenEx.token});
            })
        })
    });
};

module.exports.logout = async(req, res) => {
    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }
    h.sendJsonResponse(res, 200, 'logout detected. FIXME');
};

module.exports.selfremove = async(req, res) => {
    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }
    h.sendJsonResponse(res, 200, 'selfremove detected. FIXME');
};