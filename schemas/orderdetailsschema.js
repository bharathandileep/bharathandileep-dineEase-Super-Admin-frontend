const mongoose = require('mongoose');
 
const orderdetailsschema = new mongoose.Schema({
 
order_id : {
    type : String,
   // required : true
},
cust_id : {
    type : mongoose.Schema.Types.ObjectId,
  //  required : true
},
food_id: {
    type : mongoose.Schema.Types.ObjectId,
   // required : true
},
quantity : {
    type : Number,
  //  required : true
},
order_date : {
    type : Date,
  //  required : true
},
order_status : {
    type : String,
  //  required : true
},
supply_date_time: {
    type : Date,
  //  required : true
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
 
 
module.exports = orderdetailsschema ;