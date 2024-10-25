const express = require('express');
const Products = require('../models/productModel'); // Adjust the path to your Product model

// Product entry
const createProduct = async (req, res) => {
  try {
    // Destructure data from request body
    const {
      name,
      category,
      description,
      price,
      stockQuantity,
      location,
      supplier_id,
      specifications
    } = req.body;
   const info={
    name,
      category,
      description,
      price,
      stockQuantity,
      location,
      supplier_id,
      specifications

   }
   console.log(info)
    // Validate that all required fields are provided
    if (!name || !category || !description || !price || !quantity || !location || !supplier_id || !specifications) {
      return res.status(400).json({ success: false, message: 'Please provide all required details' });
    }

    // Check for existing product with the same name, category, and specifications
    const existingProduct = await Products.findOne({
      name,
      category,
      specifications
    });

    if (existingProduct) {
      // Respond with a 400 Bad Request if a duplicate is found
      return res.status(400).json({
        success: false,
        message: 'Product with the same name, category, and specifications already exists'
      });
    }

    // Create a new product if no exact match is found
    const product = await Products.create({
      name,
      category,
      description,
      price,
      quantity,
      location,
      supplier_id,
      specifications
    });

    // Respond with a success message and the created product
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product
    });

  } catch (error) {
    // Handle any errors that occur during product creation
    console.error('Error creating product:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: error.message
    });
  }
};

//delete the product
const deleteProduct = async (req, res) => {
  try {
    const { productName } = req.body; // Destructuring product name from request body

    // Step 1: Check if the product exists
    const productExistence = await Products.findOne({ name:productName });

    if (!productExistence) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Step 2: Delete the product if it exists
    await Products.findOneAndDelete({name: productName });

    // Step 3: Send success response
    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    // Step 4: Catch and handle any errors
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the product",
      error: error.message,
    });
  }
};

const updateProductCount = async (req, res) => {
  try {
    const { productName, countChange } = req.body; // countChange can be positive or negative

    // Step 1: Fetch the product by name
    const product = await Products.findOne({ productName });

    // Step 2: Check if the product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Step 3: Update the product count
    product.stockQuantity += countChange; // If countChange is positive, stock will increase, if negative, it will decrease

    // Step 4: Save the updated product
    await product.save();

    // Step 5: Send success response
    return res.status(200).json({
      success: true,
      message: "Product count updated successfully",
      updatedStock: product.stock,
    });
  } catch (error) {
    // Step 6: Error handling
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating product count",
      error: error.message,
    });
  }
};



//update the product information
/*the product info is updating because of this info*/

const UpdateProductInfo = async (req, res) => {
  try {
    const { productId } = req.params;  // Get product ID from URL
    const updates = req.body;  // Fields to update sent in request body

    // Step 1: Find the product by its ID
    const product = await Products.findById(productId);

    // Step 2: Check if the product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Step 3: Update the product with the provided details
    Object.keys(updates).forEach((key) => {
      product[key] = updates[key];  // Update only the fields provided
    });

    // Step 4: Save the updated product
    await product.save();

    // Step 5: Send success response
    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      updatedProduct: product,
    });
  } catch (error) {
    // Step 6: Handle any errors
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the product",
      error: error.message,
    });
  }
};



const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Products.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving product", error });
  }
};

const getAllproducts=async(req,res)=>{
  try {
    const products=await products.find();
    res.status(200).json({
      success:true,
      products
    })
    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"some error occured while fetching the All products"
    })
  }
}

const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;  // Get search term from the query string
    const products = await Products.find({
      name: { $regex: query, $options: 'i' }  // Case-insensitive search
    });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error searching products", error });
  }
};


const updateProductStatus = async (req, res) => {
  try {
    const { productId } = req.params;
    const { status } = req.body;  // Example status: 'active', 'inactive', 'discontinued'
    const product = await Products.findByIdAndUpdate(productId, { inventoryStatus: status }, { new: true });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product status updated", product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating product status", error });
  }
};


const getLowStockProducts = async (req, res) => {
  try {
    const threshold = 10;  // Define low stock threshold
    const products = await Products.find({ stockQuantity: { $lt: threshold } });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching low stock products", error });
  }
};


module.exports = {
  createProduct,
  deleteProduct,
  updateProductCount,
  UpdateProductInfo,
  getProductById,
  getAllproducts,
  searchProducts,
  updateProductStatus,
  getLowStockProducts
};
