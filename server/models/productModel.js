const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    id: { type: String, required: true },
    name: { type: String, required: true },
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  discount: {
    applicable: {
      type: Boolean,
      required: true,
    },
    discountType: {
      type: String,
      required: false,
    },
    discountValue: {
      type: Number,
      required: false,
    },
  },
  taxable: {
    type: Boolean,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: false,
  },
  images: {
    type: Array,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  modifiedBy: {
    type: String,
    required: false,
  },
});

productSchema.plugin(mongoosePaginate);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
