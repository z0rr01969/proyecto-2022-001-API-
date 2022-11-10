const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartProductsSchema = new Schema(
  {
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "products"
    },
    quantity: Number,
    unit_price: Number,
    cart_id: {
      type: Schema.Types.ObjectId,
      ref: "carts"
    }
  },
  {
    timestamps: true,
  }
);

//nombre de la colecion en Mongo ("carts_Products")
const CartProducts = mongoose.model("carts_Products", CartProductsSchema);

module.exports = CartProducts;