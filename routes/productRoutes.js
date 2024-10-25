const express = require('express');
const router = express.Router();
const { 
  deleteProduct, 
  updateProductCount, 
  UpdateProductInfo, 
  createProduct, 
  searchProducts, 
  getAllproducts, 
  getProductById, 
  updateProductStatus, 
  getLowStockProducts 
} = require('../controllers/productController');

// Create a new product
router.post('/createProduct', createProduct);

// Update product count (add/subtract stock)
router.put('/updateProductCount/:id', updateProductCount);

// Update product info (like price, description, etc.)
router.put('/updateProductInfo/:id', UpdateProductInfo);

// Delete a product
router.delete('/deleteProduct/:id', deleteProduct);

// Search products by name or other fields
router.get('/searchProducts', searchProducts);

// Get all products
router.get('/getAllProducts', getAllproducts);

// Get a product by its ID
router.get('/getProductById/:id', getProductById);

// Update product status (like in-stock, out-of-stock, etc.)
router.put('/updateProductStatus/:id', updateProductStatus);

// Get products with low stock (e.g., below a certain threshold)
router.get('/getLowStockProducts', getLowStockProducts);

module.exports = router;
