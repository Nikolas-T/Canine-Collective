const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite_Dog extends Model {}

Favorite_Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // favorite_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'favorite',
    //     key: 'id',
    //   },
    // },
    // dog_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'dog',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite_dog',
  }
);

module.exports = Favorite_Dog;
