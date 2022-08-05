const router = require('express').Router();

const home = require('./home');

router.use('/', home);

// const apiRoutes = require('./api');
// router.use('/api', apiRoutes);

module.exports = router;
