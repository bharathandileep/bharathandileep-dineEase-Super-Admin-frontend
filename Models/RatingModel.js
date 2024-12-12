
const mongoose = require('mongoose');
const ratingschema = require('../schemas/ratingschema');
const RatingModel = mongoose.model('ratings',ratingschema);// Use the imported schema
module.exports =  RatingModel;
