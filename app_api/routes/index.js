var express = require('express');
var router = express.Router();
let ctrlPractics = require('../controllers/practics');
let ctrlAuth = require('../controllers/auth');

router.get('/practics', ctrlPractics.getAll);
router.get('/practics/:id', ctrlPractics.getOne);
router.post('/practics', ctrlPractics.create);
router.put('/practics/:id', ctrlPractics.update);
router.delete('/practics/:id', ctrlPractics.delete);

router.post('/signup', ctrlAuth.signup);
router.post('/login', ctrlAuth.login);
router.get('/logout/:login', ctrlAuth.logout);
router.delete('/selfremove/:login', ctrlAuth.selfremove);

module.exports = router;