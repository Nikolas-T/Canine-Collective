const User = require('./User');
const Dog = require('./Dog');
const Favorite = require('./Favorite');
// const Favorite_Dog = require('./Favorite_Dog');
const Review = require('./Review');


User.hasOne(Favorite);
Favorite.belongsTo(User)

Favorite.hasMany(Dog);
Dog.belongsTo(Favorite)

// Favorite.hasMany(Favorite_Dog);
// Favorite_Dog.belongsTo(Favorite);

// Dog.hasMany(Favorite_Dog);
// Favorite_Dog.belongsTo(Dog);





// User.hasMany(Favorite_Dog, {
//   foreignKey: 'user_id'
// });

// Dog.belongsTo(User, {
//   foreignKey: 'user_id'
// });



module.exports = { User, Dog, Favorite, Favorite_Dog };
