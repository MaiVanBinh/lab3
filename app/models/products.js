const mongoose = require("mongoose");

const Shema = mongoose.Schema;

const ProductsSchema = new Shema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", ProductsSchema);
