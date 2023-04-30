const { Schema, model, Types } = require("../connection");
const bcrypt = require("bcrypt");
const SALT = 10;

const exhibitionSchema = new Schema({
  organizer: { type: String, required: true, },
  theme: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  artworks: [{ type: String }],
  price: { type: Number, required: true },
  start_at: Date,
  end_at: Date,   
});

module.exports = model("exhibition", exhibitionSchema);
