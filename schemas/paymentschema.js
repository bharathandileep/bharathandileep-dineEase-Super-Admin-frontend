const mongoose = require('mongoose');

const paymentschema = new mongoose.Schema({ 
    payment_id: {
        type: String,
      //  required: true
    },
    order_id : {
        type: mongoose.Schema.Types.ObjectId,
      //  required: true
    },
    cust_id : {
        type: mongoose.Schema.Types.ObjectId,
      //  required: true
    },
    payment_date : {
        type: Date,
       // required: true
    },
    amount : {
        type: Number,
      //  required: true
    },
    payment_type : {
        type: String,
      //  required: true
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


module.exports = paymentschema ;

