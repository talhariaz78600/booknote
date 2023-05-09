const mongoose=require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
        type:String,
        reuired:true

    },
    email:{
        type:String,
        reuired:true,
        unique:true

    },
    password:{
        type:String,
        reuired:true

    },
    date:{
        type:Date,
        default:Date.now

    }
  });
  const User=mongoose.model('user',UserSchema);
  module.exports=User;