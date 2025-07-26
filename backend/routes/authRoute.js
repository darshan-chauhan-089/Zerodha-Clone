const { sign } = require('jsonwebtoken');
const {signup, login} = require('../controllers/AuthController');
const { userVerificationPost, userVerificationGet } = require('../middlewares/authMiddlewares');
const router = require('express').Router();

router.get('/', userVerificationGet);
router.post('/signup', signup);
router.post('/login', login);
router.post('/', userVerificationPost);

module.exports = router;