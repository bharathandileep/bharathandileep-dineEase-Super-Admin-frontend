const mongoose = require('mongoose');

const transactionreportsschema = new mongoose.Schema({
    trans_report_id :{
        type:String,
    },
    payment_id :{
      type : mongoose.Schema.Types.ObjectId,
    },
cust_id : {
    type:mongoose.Schema.Types.ObjectId,
},
order_id : {
    type:mongoose.Schema.Types.ObjectId,
},
food_id : {
    type:mongoose.Schema.Types.ObjectId,
},
supply_id : {
    type:mongoose.Schema.Types.ObjectId,
},
Date :{
    type:Date,
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

module.exports = transactionreportsschema ;
