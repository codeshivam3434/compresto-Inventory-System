import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  Box,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

function AddProduct() {
  // State to handle form inputs
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    quantity: '', // Quantity field is now optional
    contact: '', // Added contact field
    specifications: [{ key: '', value: '', unit: '' }], // To store specifications with unit
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  // Handle specifications change
  const handleSpecificationChange = (index, e) => {
    const { name, value } = e.target;
    const newSpecifications = [...productData.specifications];
    newSpecifications[index][name] = value;
    setProductData({ ...productData, specifications: newSpecifications });
  };

  // Add a new specification input
  const addSpecification = () => {
    setProductData({
      ...productData,
      specifications: [...productData.specifications, { key: '', value: '', unit: '' }],
    });
  };

  // Remove a specification input
  const removeSpecification = (index) => {
    const newSpecifications = productData.specifications.filter((_, i) => i !== index);
    setProductData({ ...productData, specifications: newSpecifications });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product added:', productData);
    // Here you would typically make an API call to submit the form data to your backend
    // For now, just reset the form after submission
    setProductData({
      name: '',
      category: '',
      quantity: '', // Reset quantity field
      contact: '', // Reset contact field
      specifications: [{ key: '', value: '', unit: '' }],
    });
  };

  return (
    <Card style={{ maxWidth: 600, margin: 'auto', padding: '16px' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Add New Product
        </Typography>
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

            {/* Quantity (Optional) */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Quantity (Optional)"
                name="quantity"
                type="number"
                value={productData.quantity}
                onChange={handleChange}
              />
            </Grid>

            {/* Optional Contact Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact (Optional)"
                name="contact"
                value={productData.contact}
                onChange={handleChange}
              />
            </Grid>

            {/* Specifications */}
            <Grid item xs={12}>
              <Typography variant="h6">Specifications</Typography>
              {productData.specifications.map((spec, index) => (
                <Box key={index} display="flex" alignItems="center" mb={2}>
                  <TextField
                    fullWidth
                    label="Specification Key"
                    name="key"
                    value={spec.key}
                    onChange={(e) => handleSpecificationChange(index, e)}
                    required
                    style={{ marginRight: '8px' }}
                  />
                  <TextField
                    fullWidth
                    label="Value"
                    name="value"
                    value={spec.value}
                    onChange={(e) => handleSpecificationChange(index, e)}
                    required
                    style={{ marginRight: '8px' }}
                  />
                  <TextField
                    fullWidth
                    label="Unit"
                    name="unit"
                    value={spec.unit}
                    onChange={(e) => handleSpecificationChange(index, e)}
                    required
                    style={{ marginRight: '8px' }}
                  />
                  <IconButton onClick={() => removeSpecification(index)}>
                    <Remove />
                  </IconButton>
                </Box>
              ))}
              <Button
                variant="outlined"
                startIcon={<Add />}
                onClick={addSpecification}
              >
                Add Specification
              </Button>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddProduct;
