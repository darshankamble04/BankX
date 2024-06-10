const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  fromAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  },
  toAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
