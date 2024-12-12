const mongoose = require('mongoose');

const ratingschema = new mongoose.Schema({
    rating_id :{
        type:String,
      //  required:true
    },
    cust_id :{
        type: mongoose.Schema.Types.ObjectId,
       // required:true
    },
kitchen_id : {
    type: mongoose.Schema.Types.ObjectId,

  //  required:true
},
ratings : {
    type:Number,
   // required:true

},
reviews: {
    type:String,
   // required:true
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


module.exports = ratingschema;





