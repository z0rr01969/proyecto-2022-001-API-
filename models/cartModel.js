const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema(
  {
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "products"
    },
    quantity: Number,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("carts", CartSchema);

module.exports = Cart;