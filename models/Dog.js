const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true,
        },
        dog_name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        temperament:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        popularity:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        min_height:{
            type: DataTypes.DECIMAL(),
            allowNull: true,
        },
        max_height:{
            type: DataTypes.DECIMAL(),
            allowNull:true,
        },
        min_weight:{
            type: DataTypes.DECIMAL(),
            allowNull:true,
        },
        max_weight:{
            type: DataTypes.DECIMAL(),
            allowNull:true,
        },
        min_expectancy:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        max_expectancy:{
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        group:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        grooming_frequency_value:{
            type: DataTypes.DECIMAL(),
            allowNull:true,
        },
        grooming_frequency_category:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        shedding_value:{
            type: DataTypes.DECIMAL(),
            allowNull:true,
        },
        shedding_category:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        energy_level_value:{
            type: DataTypes.DECIMAL(),
            allowNull:true,
        },
        energy_level_category:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        trainability_value:{
            type: DataTypes.DECIMAL(),
            allowNull:true,
        },
        trainability_category:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        demeanor_value:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        demeanor_category:{
            type:DataTypes.STRING,
            allowNull:true,
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dog'
    }
);


module.exports = Dog;