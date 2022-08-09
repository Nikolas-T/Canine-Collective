const { Dogs } = require("../models");

const getDog = (req, res, next) => {
    dog = async (req,res) => {
        try {
            const dogData = await Dogs.findAll({
                
            })
        } catch (err) {
            res.status(400).json(err)
        }
    }
    
  };
  
  module.exports = getDog;
  