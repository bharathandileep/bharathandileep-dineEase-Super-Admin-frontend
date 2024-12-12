const mongoose = require('mongoose');

const foodproductsschema = new mongoose.Schema({

// food_id : {
//     type : String,
//    // required : true
// },

organization_id:{
  type : mongoose.Schema.Types.ObjectId,
 // required : true
},
food_name : {
    type : String,
   // required : true
},
food_price : {
    type : Number,
  //  required : true
},
food_description: {
    type : String,
   // required : true
},
image_url: {
    type : String,
   // required : true
},
kitchen_id:{
    type : mongoose.Schema.Types.ObjectId,
   // required : true
},
created_by : {
    type : mongoose.Schema.Types.ObjectId,
   // required : true
},
created_at : {
    type : Date,
  //  required : true
},
updated_by : {
    type : mongoose.Schema.Types.ObjectId,
  //  required : true
},
updated_at : {
    type : Date,
   // required : true
}
}

);

module.exports = foodproductsschema ;











