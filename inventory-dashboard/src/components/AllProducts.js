import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Select, MenuItem, FormControl, InputLabel, Box, TextField
} from '@mui/material';
import EditProductModal from './EditProduct'; // Import modal

const initialProducts = [
  { id: 1, name: 'Product 1', price: 100, stock: 50, status: 'Available', contacts: 'John Doe', category: 'Electronics' },
  { id: 2, name: 'Product 2', price: 150, stock: 0, status: 'Out of Stock', contacts: 'Jane Smith', category: 'Furniture' },
  { id: 3, name: 'Product 3', price: 200, stock: 30, status: 'Available', contacts: 'Mike Brown', category: 'Electronics' },
  { id: 4, name: 'Product 4', price: 250, stock: 10, status: 'Available', contacts: 'Emily Davis', category: 'Electronics' },
  { id: 5, name: 'Product 5', price: 300, stock: 0, status: 'Out of Stock', contacts: 'David Wilson', category: 'Furniture' },
  { id: 6, name: 'Product 6', price: 350, stock: 20, status: 'Available', contacts: 'Sarah Johnson', category: 'Home Appliances' },
  { id: 7, name: 'Product 7', price: 400, stock: 0, status: 'Out of Stock', contacts: 'Anna Lee', category: 'Home Appliances' },
  { id: 8, name: 'Product 8', price: 450, stock: 15, status: 'Available', contacts: 'Chris Green', category: 'Toys' },
  { id: 9, name: 'Product 9', price: 500, stock: 5, status: 'Available', contacts: 'Nancy White', category: 'Toys' },
  { id: 10, name: 'Product 10', price: 600, stock: 0, status: 'Out of Stock', contacts: 'James Black', category: 'Furniture'},
  { id: 11, name: 'Product 11', price: 700, stock: 25, status: 'Available', contacts: 'Laura Taylor', category: 'Clothing'},
  { id: 12, name: 'Product 12', price: 800, stock: 40, status: 'Available', contacts: 'Robert King', category: 'Clothing'},
  { id: 13, name: 'Product 13', price: 900, stock: 0, status: 'Out of Stock', contacts: 'Linda Adams', category: 'Sports'},
  { id: 14, name: 'Product 14', price: 1000, stock: 5, status: 'Available', contacts: 'William Scott', category: 'Sports'},
  // Add more products as needed
];

function AllProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleUpdateStock = (id, newStock) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, stock: newStock, status: newStock === 0 ? 'Out of Stock' : 'Available' } : product
    );
    setProducts(updatedProducts);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);
  };

  const handleSave = (updatedProduct) => {
    const updatedProducts = products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setIsEditing(false);
  };

  // Filter products based on selected category, status, and search term
  const filteredProducts = products
    .filter(product => categoryFilter ? product.category === categoryFilter : true)
    .filter(product => statusFilter ? product.status === statusFilter : true)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.id.toString().includes(searchTerm)
    );

  return (
    <div>
      <Box display="flex" justifyContent="space-between" mb={2}>
        {/* Search Input */}
        <TextField
          variant="outlined"
          placeholder="Search by ID or Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '300px', marginRight: '16px' }}
        />

        <Box display="flex" justifyContent="flex-end">
          {/* Category Filter Dropdown */}
          <FormControl style={{ width: '200px', marginRight: '8px' }}>
            <InputLabel>Filter by Category</InputLabel>
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              label="Filter by Category"
            >
              <MenuItem value="">All Categories</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Home Appliances">Home Appliances</MenuItem>
              <MenuItem value="Toys">Toys</MenuItem>
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
              {/* Add more categories as needed */}
            </Select>
          </FormControl>

          {/* Status Filter Dropdown */}
          <FormControl style={{ width: '200px' }}>
            <InputLabel>Filter by Status</InputLabel>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              label="Filter by Status"
            >
              <MenuItem value="">All Statuses</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Out of Stock">Out of Stock</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Contacts</TableCell>
              <TableCell>Category</TableCell> {/* New Category Column */}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.status}</TableCell>
                <TableCell>{product.contacts}</TableCell>
                <TableCell>{product.category}</TableCell> {/* Displaying Category */}
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdateStock(product.id, product.stock + 10)}
                    style={{ marginRight: '8px' }}
                  >
                    Update Stock
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleEdit(product)}
                    style={{ marginRight: '8px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Product Modal */}
      {isEditing && (
        <EditProductModal
          open={isEditing}
          handleClose={() => setIsEditing(false)} // Close modal
          product={selectedProduct}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default AllProducts;
