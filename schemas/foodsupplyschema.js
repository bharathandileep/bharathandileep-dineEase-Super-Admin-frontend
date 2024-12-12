const mongoose = require('mongoose');

const foodsupplyschema = new mongoose.Schema({

supply_id:{
    type:String,
   // required:true
},

supply_name:{
    type:String,
  //  required:true
},

supply_quantity:{
    type:Number,
   // required:true
},

supply_price:{
    type:Number,
   // required:true
},

supply_date: {
    type: Date,
    default: Date.now
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
module.exports = foodsupplyschema ;











