const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemorialSchema = new Schema(
  {
    deceasedPersonName: { type: String, required: true },
    senderName: { type: String, required: true },
    birthYear: { type: Number, min: 1900, max: new Date().getFullYear() },
    deathYear: { type: Number, min: 1900, max: new Date().getFullYear() },
    province: { type: String },
    district: { type: String },
    remembranceWords: { type: String, required: true, maxlength: 5000 },
    relationship: { type: String, default: "Other" },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    candles: [{ type: mongoose.Types.ObjectId, ref: "users" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("memorials", MemorialSchema);
