const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./dogsRoutes');

router.use('/users', userRoutes);
router.use('/dogs', dogsRoutes);

module.exports = router;
