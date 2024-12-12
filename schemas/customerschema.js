const mongoose = require('mongoose');

const customerschema = new mongoose.Schema({ 
  // cust_id : {
  //   type:String,
  //   // required:true,
  //   // unique:true
  // },

  cust_name :{
    type :String,
    // required:true
  },
  contact_num :{
    type:Number,
    //required:true,
    // unique:true
  },

  address : {
    type:String,
   // required:true
  },
  email : {
    type:String ,
    unique: true,

    // required:true,
    // unique:true
  },
  password: {
    type: String,
   // required: true,
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
    type :Date,
   // required : true
}

});



module.exports = customerschema;
