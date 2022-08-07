const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const dogRoutes = require ('./dogRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/dogs', dogRoutes);

module.exports = router;
