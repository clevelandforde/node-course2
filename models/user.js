const { text } = require('body-parser');
const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    idNo: {
      type: Number,
      required: true,
    },
    regimentNo: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
