const { sign } = require('jsonwebtoken');
const {signup, login} = require('../controllers/AuthController');
const { userVerificationUserId, userVerification } = require('../middlewares/authMiddlewares');
const router = require('express').Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/', userVerification);

// router.get('/:userId', userVerificationUserId);

module.exports = router;