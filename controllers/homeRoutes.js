const router = require('express').Router();
const { Dogs, User } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require("sequelize");
const sequelize = require('../config/connection');
const e = require('express');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {  
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/profile', withAuth, (req, res) => {
  res.render('profile', {
    logged_in: req.session.logged_in
  });
});

router.get('/search/', async (req, res) => { 
  try {
    let options = {
      where: {}
    };
  
    if (req.query.breed) {
      options.where.dog_name = { [Op.like]: `%${req.query.breed}%` };
    }
  
    if (req.query.temperament) {
      options.where.temperament = { [Op.like]: `%${req.query.temperament},%` };
    }
  
    if (req.query.energy) {
      options.where.energy_level_category = { [Op.like]: `%${req.query.energy_level_category},%` };
    }
  
    if (req.query.grooming) {
      options.where.grooming_frequency_category = { [Op.like]: `%${req.query.grooming_frequency_category},%` };
    }
  
    let dogs = Dogs.findAll(options).then(rows => {
      let output = "";
  
      if (rows.length > 0) {
        rows.forEach(row => {
          output += `<b>${row.dog_name}</b> | ${row.temperament} | ${row.energy_level_category} | ${row.grooming_frequency_category}<br>`;
        });
      } else {
        output = "No dogs found, dog.";
      }
  
      // let energy_levels = await Dogs.findAll({
      //   raw: true,
      //   attributes: [
      //     [sequelize.fn('DISTINCT', sequelize.col('energy_level_category')), 'energy_level_category']
      //   ]
      // });
  
      // console.log("TEST");
      // console.log(energy_levels);
  
      // res.render('search', { 
      // }); 

      res.send(output);
     });
  } catch (err){
    console.log (err)
  }

});


module.exports = router;
