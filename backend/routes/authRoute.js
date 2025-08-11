const { sign } = require('jsonwebtoken');
const {signup, login} = require('../controllers/AuthController');
const { userVerificationUserId, userVerification } = require('../middlewares/authMiddlewares');
const { wrapAsync } = require('../utils/utils');
const router = require('express').Router();

router.post('/signup', wrapAsync(signup));
router.post('/login', wrapAsync(login));
router.get('/', wrapAsync(userVerification));

// router.get('/:userId', userVerificationUserId);

module.exports = router;