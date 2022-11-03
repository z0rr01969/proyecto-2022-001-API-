const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        shipping_address: String,
        notes: String,
        cart_id: {
            type: Schema.Types.ObjectId,
            ref: "carts",
        }
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;