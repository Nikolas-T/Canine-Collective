const User = require('./User');
const Dogs = require('./dogs');
const Favorite = require('./Favorite');
const Review = require('./Review');



User.hasMany(Dogs, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Dogs.belongsTo(User, {
  foreignKey: 'user_id'
});

Dogs.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Dogs, Favorite, Review };
