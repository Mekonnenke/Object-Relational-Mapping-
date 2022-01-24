// brings in the express router 
const router = require('express').Router();
//brings in the category-routes 
const categoryRoutes = require('./category-routes');
//brings in the product routes 
const productRoutes = require('./product-routes');
//brings in the tag-routes 
const tagRoutes = require('./tag-routes');

//allows the router to use the categoryroutes to the server
router.use('/categories', categoryRoutes);
// allows the router to use the productRoutes to the server
router.use('/products', productRoutes);
//allows the router to use the tagroutes to the server
router.use('/tags', tagRoutes);
//exports all to the server via router
module.exports = router;
