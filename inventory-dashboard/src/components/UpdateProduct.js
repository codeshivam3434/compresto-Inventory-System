import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Card, CardContent, Typography } from '@mui/material';

// Mock data for products
const productList = [
  { id: 1, name: 'Product 1', category: 'Electronics', price: 100, stock: 50, status: 'Available' },
  { id: 2, name: 'Product 2', category: 'Groceries', price: 200, stock: 5, status: 'Low Stock' },
  { id: 3, name: 'Product 3', category: 'Furniture', price: 300, stock: 0, status: 'Out of Stock' },
];

function UpdateProduct() {
  const [selectedProductId, setSelectedProductId] = useState('');
  const [productData, setProductData] = useState(null);

  // Handle product selection
  const handleProductSelect = (e) => {
    const productId = e.target.value;
    setSelectedProductId(productId);

    // Find the product based on the selected ID
    const selectedProduct = productList.find((product) => product.id === parseInt(productId));
    setProductData(selectedProduct);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Product:', productData);
    // Submit updated data to backend here...
  };

  return (
    <Card style={{ maxWidth: 600, margin: 'auto', padding: '16px' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Update Product Info
        </Typography>

        {/* Product Selection Dropdown */}
        <TextField
          select
          label="Select Product"
          value={selectedProductId}
          onChange={handleProductSelect}
          fullWidth
          margin="normal"
        >
          {productList.map((product) => (
            <MenuItem key={product.id} value={product.id}>
              {product.name}
            </MenuItem>
          ))}
        </TextField>

        {/* Display Form only if a product is selected */}
        {productData && (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Product Name */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Product Name"
                  name="name"
                  value={productData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Category */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Category"
                  name="category"
                  value={productData.category}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Price */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  type="number"
                  value={productData.price}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Stock */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Stock"
                  name="stock"
                  type="number"
                  value={productData.stock}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Status */}
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Product Status"
                  name="status"
                  value={productData.status}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Available">Available</MenuItem>
                  <MenuItem value="Low Stock">Low Stock</MenuItem>
                  <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                </TextField>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

export default UpdateProduct;
