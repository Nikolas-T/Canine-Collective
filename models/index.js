const User = require('./User');
const Dogs = require('./dogs');
const energyLevel = require('./dogs')

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

// // A Dog can have ONE Energy Level
// Dogs.hasOne(energyLevel, {
//   foreignKey: ,
//   onDelete: ,
// });

// // An Energy Level can belong to MANY Dogs
// energyLevel.hasMany(Dogs, {
//   foreignKey: ,
//   onDelete: , 

// });

// energyLevel.belongsTo(Dogs,{
//   foreignKey: ,

// });
module.exports = { User, Dogs, energyLevel };
