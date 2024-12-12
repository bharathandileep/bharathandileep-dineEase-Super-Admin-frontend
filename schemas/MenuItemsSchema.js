const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({

    item_id :{
        type : String,
       // required : true
    },

    menu_id :{
        type : mongoose.Schema.Types.ObjectId,
        //required : true
    },
    name :{
        type : String,

       // required : true
    },
    description : {
        type : String,
       // required : true
    },
    price : {
        type : Number,
       // required : true
    },
   is_available : {
        type : String,
      //  required : true
    },
    image_url : {
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

module.exports = MenuItemSchema;










 





