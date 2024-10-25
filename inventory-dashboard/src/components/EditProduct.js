import React, { useState, useEffect } from 'react';
import {
  Modal, Box, Button, TextField, Typography, IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Cross icon for closing

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EditProductModal = ({ open, handleClose, product, onSave }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [contacts, setContacts] = useState('');

  useEffect(() => {
    if (product) {
      setProductName(product.name);
      setPrice(product.price);
      setStock(product.stock);
      setContacts(product.contacts);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name: productName,
      price: parseFloat(price),
      stock: parseInt(stock),
      contacts: contacts,
    };
    onSave(updatedProduct);
    handleClose(); // Close modal after saving
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose} // Close the modal
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2">
          Edit Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Product Name"
            fullWidth
            margin="normal"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <TextField
            label="Price"
            type="number"
            fullWidth
            margin="normal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <TextField
            label="Stock"
            type="number"
            fullWidth
            margin="normal"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
          <TextField
            label="Contacts"
            fullWidth
            margin="normal"
            value={contacts}
            onChange={(e) => setContacts(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditProductModal;
