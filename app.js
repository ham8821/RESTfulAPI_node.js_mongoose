const express= require('express');
const app= express();

const productRoutes = require('./api/routes/products');
const OrderRoutes = require('./api/routes/orders');

// Routes which should handle request
app.use('/products', productRoutes )
app.use('/orders', OrderRoutes )
module.exports= app;