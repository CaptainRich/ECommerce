const router = require('express').Router();

// Collect all of the API routes into a single package.
const categoryRoutes = require('./category-routes');
const productRoutes  = require('./product-routes');
const tagRoutes      = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

/////////////////////////////////////////////////////////////////////////
module.exports = router;
