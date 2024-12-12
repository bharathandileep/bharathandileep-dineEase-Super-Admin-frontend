const mongoose = require('mongoose');

const companyschema = new mongoose.Schema({

    // company_id :{
    //     type : String,
    //    // required : true
    // },

    company_name :{
        type : String,
        unique: true,

        //required : true
    },
    company_location :{
        type : String,

       // required : true
    },
    company_contact : {
        type : Number,
        unique: true,

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

module.exports = companyschema;










