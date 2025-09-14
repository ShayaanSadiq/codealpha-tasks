const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth');

// create order (checkout)
router.post('/', auth, async (req,res)=>{
  try {
    const { items, address } = req.body;
    if(!items || items.length===0) return res.status(400).json({message:'Cart empty'});
    const total = items.reduce((s,i)=> s + (i.price * i.quantity), 0);
    const order = await Order.create({
      userId: req.userId,
      items,
      total,
      address
    });
    res.status(201).json(order);
  } catch(err){ console.error(err); res.status(500).json({message:'Server error'})}
});

// get orders for logged-in user
router.get('/', auth, async (req,res)=>{
  const orders = await Order.find({ userId: req.userId }).sort({ createdAt: -1 });
  res.json(orders);
});

module.exports = router;
