const User = require('./User');
const Dog = require('./Dog');
const Favorite = require('./Favorite');
const Review = require('./Review');


User.hasOne(Favorite, {
    onDelete: "CASCADE"
});

Favorite.belongsTo(User, {
    foreignKey: {
        allowNull: false
    }
});

Dog.hasMany(Favorite);

Favorite.belongsTo(Dog, {
    foreignKey: {
        allowNull: false
    }
});

User.hasMany(Review, {
    onDelete: "CASCADE"
});
Review.belongsTo(User, {
    foreignKey: {
        allowNull: false
    }
});

module.exports = { User, Dog, Favorite};
