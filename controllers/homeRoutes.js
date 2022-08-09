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

router.get('/dog/:id', async (req, res) => {
try {
  let id = req.params.id;
  console.log('Searching for ' + id);

  let dog = await Dogs.findOne({
    where: {
      'id': id
    }
  });

  dog = dog.dataValues;

  res.render('dogsModal', {
    dog
  });
} catch (error) {
  console.log(error);
}

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
  
    let dogs = await Dogs.findAll(options);
    // let output = "";

    // if (rows.length > 0) {
    //   rows.forEach(row => {
    //     output += `<a href="/dog/${row.id}" target="_blank"><b>${row.dog_name}</b></a> | ${row.temperament} | ${row.energy_level_category} | ${row.grooming_frequency_category}<br>`;
    //   });
    // } else {  
    //   output = "No dogs found, dog.";
    // }

    // res.send(output);
  
    let newDogs = [];

    dogs.forEach((dog, i) => {
      newDogs[i] = dog.dataValues;
    });

    dogs = newDogs;

    console.log(dogs);

    res.render('results', { 
      dogs
    }); 

  } catch (err){
    console.log (err)
  }
});


module.exports = router;
