import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AllProducts from './components/AllProducts';
import AddProduct from './components/AddProduct';
import LowStock from './components/LowStock';
// import DeleteProduct from './components/DeleteProduct';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <main style={{ marginLeft: '240px', padding: '16px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/low-stock" element={<LowStock />} />
          {/* <Route path="/delete-product" element={<DeleteProduct />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
