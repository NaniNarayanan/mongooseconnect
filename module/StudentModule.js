  const mongoose = require('mongoose');

  const addressSchema = new mongoose.Schema({
    city: String
  })

  const studentSchema = new mongoose.Schema({
    name: String,
    age:{
        type: Number,
        required: true,
        min: [18, 'Age must be 18 or above']
    },
    joinedon: Date,
    skils: [String],
    address:{
        city: String
    }
  })

  module.exports = mongoose.model("student", studentSchema);