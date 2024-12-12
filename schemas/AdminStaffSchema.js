const mongoose = require('mongoose');

const AdminStaffsSchema = new mongoose.Schema({

  //  admin_staff_id :{
  //       type : String,
  //      // required : true
  //   },

    name :{
        type : String,

       // required : true
    },
    role : {
        type : String,
       // required : true
    },
    email : {
        type : String,
        unique: true,

      //  required : true
    },
    phone : {
        type : Number,
        unique: true,

      //  required : true
    },
    shift_start : {
        type : String,
      //  required : true
    },
    shift_end : {
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

module.exports = AdminStaffsSchema;










