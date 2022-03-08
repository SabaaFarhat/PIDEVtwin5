const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const commandSchema = new Schema({
   numCommand: {
    type: Number,
    required: true,
  }, 
  dateCommand: {
      type: Date,
    required: true,
  },
  datePayment: {
    type: Date,
  },
  stateCommand: {
    type: Boolean,
  }
}, {
  timestamps: true,
});


const Command = mongoose.model('Command', commandSchema);

module.exports = Command;