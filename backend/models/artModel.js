const { Schema, model, Types } = require("../connection");
// const bcrypt = require("bcrypt");
const SALT = 10;

const artSchema = new Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  artist: { type: Types.ObjectId, ref: 'user' },
  price: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("artwork", artSchema);
