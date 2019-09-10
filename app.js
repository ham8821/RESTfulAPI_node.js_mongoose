const express= require('express');
const app= express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const OrderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

// Routes which should handle request
app.use('/products', productRoutes );
app.use('/orders', OrderRoutes );
module.exports= app;