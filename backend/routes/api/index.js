const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessRouter = require(`./businesses`);
const searchRouter = require('./search');
const reviewRouter = require('./reviews');
const marinaRouter = require('./marinas');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/businesses', businessRouter);
router.use('/search', searchRouter);
router.use('/reviews', reviewRouter);
router.use('/marinas', marinaRouter);





module.exports = router;
