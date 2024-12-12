const mongoose = require('mongoose');
 
 
const OrderItemSchema = new mongoose.Schema({
 
 
    order_item_id :{
        type : String,
       // required : true
    },
    order_id :{
        type : mongoose.Schema.Types.ObjectId,
        //required : true
    },
    item_id :{
        type : mongoose.Schema.Types.ObjectId,
       // required : true
    },
    qty : {
        type : Number,
       // required : true
    },
    special_request : {
        type : String,
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
 
 
module.exports = OrderItemSchema;