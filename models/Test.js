const mongoose = require("mongoose");
const TestsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("Tests", TestsSchema);
