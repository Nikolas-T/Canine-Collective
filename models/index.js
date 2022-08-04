const User = require('./User');
const Dogs = require('./dogs');


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

module.exports = { User, Dogs };
