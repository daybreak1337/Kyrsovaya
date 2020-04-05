let mongoose = require('mongoose');
let token = mongoose.model('token');

module.exports.sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

module.exports.isValidToken = async (tokenValue) => {
    if (tokenValue) {
        let tokenEx = await token.findOne({token: tokenValue});

        if(!tokenEx){
            return false;
        }

        return (tokenEx.expired > Date.now());
    }
    return false;
};