const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  title: String,
  price: Number,
  quantity: Number
});

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [orderItemSchema],
  total: Number,
  address: String,
  status: { type: String, default: 'pending' }, // pending, processed
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
