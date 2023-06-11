const mongoose = require("mongoose");

const collection = "Usuarios";

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: Number,
  password: String,
  cart: {
    type: [
      {
        cart: {
          type:mongoose.Schema.Types.ObjectId,
          ref:"cart"
        }
      }
    ], 
    default:[]
  },
  
  role: {
    type: String,
    default: "USER"
  }
});



const userModel = mongoose.model(collection, schema);
module.exports = userModel;