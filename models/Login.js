const mongoose = require ('mongoose');
const Schema = mongoose.Schema; 

const userSchema = new Schema ({

  username: {
    type: String, 
    required: true, 
    unique: true, 
    trim: true, 
    minlength: 3
  },
  password: {
    type: String, 
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  }
})

const User = mongoose.model('Login', userSchema)

module.exports= User; 

