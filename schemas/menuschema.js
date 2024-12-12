const mongoose = require('mongoose');

const menuschema = new mongoose.Schema({

    menu_id : {
        type : String,
      //  required : true
    },
    price : {
        type : Number,
       // required : true
    },
    
    food_id : {
        type : mongoose.Schema.Types.ObjectId,
     //   required : true
    },
    food_name : {
        type : String,
      //  required : true
    },
    food_qty :{
        type : Number,
     //   required : true
    },
    item_category : {
        type : String,
     //   required : true
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
      type :  mongoose.Schema.Types.ObjectId,
    //  required : true
  },
  updated_at : {
      type : Date,
     // required : true
  }


}
);

module.exports = menuschema;