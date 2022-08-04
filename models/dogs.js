const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dogs extends Model {}

Dogs.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        temperament:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        popularity:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        min_height:{
            type: DataTypes.DECIMAL(),
            allowNull: false,
        },
        max_height:{
            type: DataTypes.DECIMAL(),
            allowNull:false,
        },
        min_weight:{
            type:DataTypes.DECIMAL(),
            allowNull:false,
        },
        max_weight:{
            type:DataTypes.DECIMAL(),
            allowNull:false,
        },
        min_expectancy:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        max_expectancy:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        group:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        grooming_frequency_value:{
            type:DataTypes.DECIMAL(),
            allowNull:false,
        },
        grooming_frequency_category:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        shedding_value:{
            type:DataTypes.DECIMAL(),
            allowNull:false,
        },
        shedding_category:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        energy_level_value:{
            type:DataTypes.DECIMAL(),
            allowNull:false,
        },
        energy_level_category:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        trainability_value:{
            type:DataTypes.DECIMAL(),
            allowNull:false,
        },
        trainability_category:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        demeanor_value:{
            type:DataTypes.DECIMAL(),
            allowNull:false,
        },
        demeanor_category:{
            type:DataTypes.DECIMAL(),
            allowNull:false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
          },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dogs'

    }
);


module.exports = Dogs;