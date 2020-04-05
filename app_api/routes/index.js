var express = require('express');
var router = express.Router();
let ctrlPosecheniya = require('../controllers/posecheniya');
let ctrlAuth = require('../controllers/auth');

router.get('/posecheniya', ctrlPosecheniya.getAll);
router.get('/posecheniya/:id', ctrlPosecheniya.getOne);
router.post('/posecheniya', ctrlPosecheniya.create);
router.put('/posecheniya/:id', ctrlPosecheniya.update);
router.delete('/posecheniya/:id', ctrlPosecheniya.delete);

router.post('/signup', ctrlAuth.signup);
router.post('/login', ctrlAuth.login);
router.get('/logout/:login', ctrlAuth.logout);
router.delete('/selfremove/:login', ctrlAuth.selfremove);

module.exports = router;