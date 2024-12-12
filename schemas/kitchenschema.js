const mongoose = require('mongoose');

const kitchenschema = new mongoose.Schema({
    // kitchen_id : {
    //     type : String,
    //    // required : true
    // },
    f_name : {
        type : String,
        
       // required : true
    },
    l_name : {
        type : String,
       // required : true
    },
    username : {
        type : String,
        unique: true,
       // required : true
    },
    password : {
        type : String,
       // required : true
    },
    description : {
        type : String,
    },
    phone_no : {
        type : Number,
       //c required : true
    },
    // order_id : {
    //     type : mongoose.Schema.Types.ObjectId,
    //    // required : true
    // },
    image_url : {
        type : String,
       // required : true
    },

    image_url: {
        type : String,
       // required : true
    },

    location: {
        type : String,
       // required : true
    },
    revenue : {
        type : Number,
       // required : true
    },
    description: {
        type : String,
       // required : true
    },
    employees: {
        type : String,
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
});

module.exports = kitchenschema;

