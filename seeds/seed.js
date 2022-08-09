const sequelize = require('../config/connection');
const { User, Dogs } = require('../models');

const favoriteData = require("./favoriteData.json")
const dogData = require("./csvjson.json")
const userData = require('./userData.json');
// const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  for (const dog of dogData) {
    await Dogs.create({
      ...dog,
    });
  }

  for (const favorite of favoriteData) {
    await Dogs.create({
      ...favorite,
    });
  }

  process.exit(0);
};

seedDatabase();
