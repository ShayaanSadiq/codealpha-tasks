const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// list products
router.get('/', async (req,res)=>{
  const products = await Product.find().select('-__v');
  res.json(products);
});

// get product details
router.get('/:id', async (req,res)=>{
  try {
    const p = await Product.findById(req.params.id);
    if(!p) return res.status(404).json({message:'Not found'});
    res.json(p);
  } catch(err){ res.status(400).json({message:'Invalid id'})}
});

// (optional) admin create product - simple, no auth for starter
router.post('/', async (req,res)=>{
  const { title, description, price, image, stock } = req.body;
  const p = await Product.create({ title, description, price, image, stock });
  res.status(201).json(p);
});

module.exports = router;
