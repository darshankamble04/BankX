const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  accounts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  }],
});

module.exports = mongoose.model('Customer', CustomerSchema);
