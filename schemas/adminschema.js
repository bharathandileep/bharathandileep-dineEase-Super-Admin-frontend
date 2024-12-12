const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({

    admin_id :{
        type : String,
       // required : true
    },

    f_name :{
        type : String,

        //required : true
    },
    l_name :{
        type : String,

       // required : true
    },
    user_name : {
        type : String,
       // required : true
    },
    password : {
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

module.exports = adminschema;










