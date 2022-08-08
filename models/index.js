const User = require('./User');
const Dogs = require('./dogs');
const Favorite = require('./Favorite');
const Review = require('./Review');




Dogs.belongsToMany(User, {
    through: {
        model: Favorite,
        foreignKey: "dog_id"
    }
})

User.belongsToMany(Dogs, {
    through: {
        model: Favorite,
        foreignKey: "user_id"
    }
})

User.hasMany(Review, {
    onDelete: "CASCADE",
    foreignKey: "user_id"
});

Dogs.hasMany(Review, {
    foreignKey: "dog_id"
})

Review.belongsTo(User, {
    foreignKey: "user_id"
})

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

// Dogs.hasMany(Review);
// Review.belongsTo(Dogs, {
//     foreignKey: {
//         name: "dog_id",
//         allowNull: false
//     }
// })


module.exports = { User, Dogs, Favorite, Review };
