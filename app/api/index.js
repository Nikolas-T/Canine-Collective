const router = require('express').Router();

const user_routes = require('.routes/userRoutes');
router.use('/users', user_routes);

module.exports = router;

// From mini project:
// const projectRoutes = require('./projectRoutes');
// router.use('/projects', projectRoutes);
