const User = require('./User');
const Dogs = require('./dogs');
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

Dogs.hasMany(Favorite);

Favorite.belongsTo(Dogs, {
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

Dogs.hasMany(Review);
Review.belongsTo(Dogs, {
    foreignKey: {
        name: "dog_id",
        allowNull: false
    }
})


module.exports = { User, Dogs, Favorite};
