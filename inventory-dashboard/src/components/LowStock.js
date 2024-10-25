// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// // Mock data for products
// const initialProducts = [
//   { id: 1, name: 'Product 1', price: 100, stock: 5, status: 'Low Stock' },
//   { id: 2, name: 'Product 2', price: 200, stock: 3, status: 'Low Stock' },
//   { id: 3, name: 'Product 3', price: 150, stock: 12, status: 'Available' },
//   { id: 4, name: 'Product 4', price: 250, stock: 7, status: 'Low Stock' },
//   { id: 5, name: 'Product 5', price: 300, stock: 15, status: 'Available' },
// ];

// function LowStock() {
//   const [products, setProducts] = useState(initialProducts);

//   // Handle restock - increase stock by a given amount (for demo, let's increase by 10)
//   const handleRestock = (id, restockAmount) => {
//     const updatedProducts = products.map(product =>
//       product.id === id
//         ? { ...product, stock: product.stock + restockAmount, status: 'Available' }
//         : product
//     );
//     setProducts(updatedProducts);
//   };

//   // Filter products with stock less than 10
//   const lowStockProducts = products.filter(product => product.stock < 10);

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Product ID</TableCell>
//             <TableCell>Product Name</TableCell>
//             <TableCell>Price</TableCell>
//             <TableCell>Stock</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {lowStockProducts.map((product) => (
//             <TableRow key={product.id}>
//               <TableCell>{product.id}</TableCell>
//               <TableCell>{product.name}</TableCell>
//               <TableCell>{product.price}</TableCell>
//               <TableCell>{product.stock}</TableCell>
//               <TableCell>{product.status}</TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleRestock(product.id, 10)}
//                 >
//                   Restock +10
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default LowStock;
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';

// Mock data for products
const initialProducts = [
  { id: 1, name: 'Product 1', price: 100, stock: 5, status: 'Low Stock' },
  { id: 2, name: 'Product 2', price: 200, stock: 3, status: 'Low Stock' },
  { id: 3, name: 'Product 3', price: 150, stock: 12, status: 'Available' },
  { id: 4, name: 'Product 4', price: 250, stock: 7, status: 'Low Stock' },
  { id: 5, name: 'Product 5', price: 300, stock: 15, status: 'Available' },
];

function LowStock() {
  const [products, setProducts] = useState(initialProducts);
  const [restockAmounts, setRestockAmounts] = useState({});

  // Handle restock - increase stock by a given amount for each product
  const handleRestock = (id) => {
    const restockAmount = restockAmounts[id] || 0; // Default to 0 if no value provided
    const updatedProducts = products.map(product =>
      product.id === id
        ? {
            ...product,
            stock: product.stock + restockAmount,
            status: product.stock + restockAmount >= 10 ? 'Available' : 'Low Stock',
          }
        : product
    );
    setProducts(updatedProducts);
  };

  // Handle input changes for restock amount
  const handleRestockAmountChange = (id, value) => {
    setRestockAmounts({
      ...restockAmounts,
      [id]: Number(value), // Store the restock amount for the specific product
    });
  };

  // Filter products with stock less than 10
  const lowStockProducts = products.filter(product => product.stock < 10);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Restock Amount</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lowStockProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.status}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  label="Restock Amount"
                  variant="outlined"
                  size="small"
                  value={restockAmounts[product.id] || ''}
                  onChange={(e) => handleRestockAmountChange(product.id, e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleRestock(product.id)}
                  disabled={!restockAmounts[product.id] || restockAmounts[product.id] <= 0} // Disable button if no valid restock amount
                >
                  Restock
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LowStock;
