const { Schema, model, Types } = require("../connection");
const bcrypt = require("bcrypt");
const SALT = 10;

const exhibitionSchema = new Schema({
  title: { type: String, required: true, },
  theme: { type: String },
  // description: { type: String, required: true, unique: true },
  artworks: [{ type: Types.ObjectId, ref: 'artwork' }],
  price: { type: Number, required: true },
  organizer: { type: Types.ObjectId, ref: 'user' },
  start_at: Date,
  end_at: Date,   
});

module.exports = model("artexhibition", exhibitionSchema);
