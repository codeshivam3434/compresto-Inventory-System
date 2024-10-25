//VERSION-1 WITHOUT SERVICE REQUEST SEEING CARD
// import React from "react";
// import './Dashboard.css'; // Assuming you will create this file for styling
// import Navbar from './Navbar';  // Import existing Navbar
// import Sidebar from './Sidebar'; // Import existing Sidebar

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <Navbar />
//       <Sidebar />
//       <div className="dashboard-content">
//         <div className="card-grid">
//           {/* Total Products in Stock */}
//           <div className="card">
//             <h3>Total Products in Stock</h3>
//             <p className="card-number">1245</p>
//           </div>

//           {/* Low Stock Alerts */}
//           <div className="card alert-card">
//             <h3>Low Stock Alerts</h3>
//             <p className="card-number">5 <span className="alert-text">items low on stock</span></p>
//           </div>

//           {/* Out of Stock Items */}
//           <div className="card alert-card">
//             <h3>Out of Stock</h3>
//             <p className="card-number">3 <span className="alert-text">items out of stock</span></p>
//           </div>

//           {/* Recently Added Products */}
//           <div className="card">
//             <h3>Recently Added Products</h3>
//             <ul>
//               <li>Compressor XZ120 (2024-10-16)</li>
//               <li>Compressor YT78 (2024-10-12)</li>
//             </ul>
//           </div>

//           {/* Pending Orders */}
//           <div className="card">
//             <h3>Pending Orders</h3>
//             <p className="card-number">8 <span className="alert-text">pending orders</span></p>
//           </div>

//           {/* Stock Value */}
//           <div className="card">
//             <h3>Total Stock Value</h3>
//             <p className="card-number">$89,230</p>
//           </div>

//           {/* Upcoming Deliveries */}
//           <div className="card">
//             <h3>Upcoming Deliveries</h3>
//             <ul>
//               <li>Compressor ZW45 (ETA: 2024-10-20)</li>
//               <li>Compressor XW34 (ETA: 2024-10-25)</li>
//             </ul>
//           </div>

//           {/* Critical Alerts */}
//           <div className="card alert-card">
//             <h3>Critical Alerts</h3>
//             <p>No critical alerts at this time</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// //VERSION-2 SERVICE REQUEST CARD AVAILABLE TO SEE
// import React from "react";
// import './Dashboard.css'; // Assuming you will create this file for styling
// import Navbar from './Navbar';  // Import existing Navbar
// import Sidebar from './Sidebar'; // Import existing Sidebar

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <Navbar />
//       <Sidebar />
//       <div className="dashboard-content">
//         <div className="card-grid">
//           {/* Total Products in Stock */}
//           <div className="card">
//             <h3>Total Products in Stock</h3>
//             <p className="card-number">1245</p>
//           </div>

//           {/* Low Stock Alerts */}
//           <div className="card alert-card">
//             <h3>Low Stock Alerts</h3>
//             <p className="card-number">5 <span className="alert-text">items low on stock</span></p>
//           </div>

//           {/* Out of Stock Items */}
//           <div className="card alert-card">
//             <h3>Out of Stock</h3>
//             <p className="card-number">3 <span className="alert-text">items out of stock</span></p>
//           </div>

//           {/* Recently Added Products */}
//           <div className="card">
//             <h3>Recently Added Products</h3>
//             <ul>
//               <li>Compressor XZ120 (2024-10-16)</li>
//               <li>Compressor YT78 (2024-10-12)</li>
//             </ul>
//           </div>

//           {/* Pending Orders */}
//           <div className="card">
//             <h3>Pending Orders</h3>
//             <p className="card-number">8 <span className="alert-text">pending orders</span></p>
//           </div>

//           {/* Stock Value */}
//           <div className="card">
//             <h3>Total Stock Value</h3>
//             <p className="card-number">$89,230</p>
//           </div>

//           {/* Upcoming Deliveries */}
//           <div className="card">
//             <h3>Upcoming Deliveries</h3>
//             <ul>
//               <li>Compressor ZW45 (ETA: 2024-10-20)</li>
//               <li>Compressor XW34 (ETA: 2024-10-25)</li>
//             </ul>
//           </div>

//           {/* Critical Alerts */}
//           <div className="card alert-card">
//             <h3>Service Requests</h3>
//             <p className="card-number">2 <span className="alert-text">critical issues pending</span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState } from "react";
import './Dashboard.css'; // Assuming you will create this file for styling
import Navbar from './Navbar';  // Import existing Navbar
import Sidebar from './Sidebar'; // Import existing Sidebar
import Popup from './ServiceRequests'; // Import your Popup component

const Dashboard = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Sample service requests data
  const serviceRequests = [
    {
      companyName: 'ABC Corp',
      contactPerson: 'John Doe',
      serviceType: 'Compressor Maintenance',
      requestDate: '2024-10-20',
      address: '456 Industry Rd, Business City, BC 54321',
      phone: '(123) 456-7890',
      email: 'johndoe@abccorp.com',
      notes: 'Urgent service required',
    },
    {
      companyName: 'XYZ Ltd',
      contactPerson: 'Jane Smith',
      serviceType: 'Compressor Repair',
      requestDate: '2024-10-19',
      address: '789 Commerce St, Business City, BC 54321',
      phone: '(987) 654-3210',
      email: 'janesmith@xyzltd.com',
      notes: 'Needs immediate attention',
    },
  ];

  // Function to handle opening the popup with selected request
  const handleOpenPopup = (request) => {
    setSelectedRequest(request);
    setPopupOpen(true);
  };

  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      <div className="dashboard-content">
        <div className="card-grid">
          {/* Total Products in Stock */}
          <div className="card">
            <h3>Total Products in Stock</h3>
            <p className="card-number">1245</p>
          </div>

          {/* Low Stock Alerts */}
          <div className="card alert-card">
            <h3>Low Stock Alerts</h3>
            <p className="card-number">5 <span className="alert-text">items low on stock</span></p>
          </div>

          {/* Out of Stock Items */}
          <div className="card alert-card">
            <h3>Out of Stock</h3>
            <p className="card-number">3 <span className="alert-text">items out of stock</span></p>
          </div>

          {/* Recently Added Products */}
          <div className="card">
            <h3>Recently Added Products</h3>
            <ul>
              <li>Compressor XZ120 (2024-10-16)</li>
              <li>Compressor YT78 (2024-10-12)</li>
            </ul>
          </div>

          {/* Pending Orders */}
          <div className="card">
            <h3>Pending Orders</h3>
            <p className="card-number">8 <span className="alert-text">pending orders</span></p>
          </div>

          {/* Stock Value */}
          <div className="card">
            <h3>Total Stock Value</h3>
            <p className="card-number">$89,230</p>
          </div>

          {/* Upcoming Deliveries */}
          <div className="card">
            <h3>Upcoming Deliveries</h3>
            <ul>
              <li>Compressor ZW45 (ETA: 2024-10-20)</li>
              <li>Compressor XW34 (ETA: 2024-10-25)</li>
            </ul>
          </div>

          {/* Service Requests */}
          <div className="card alert-card">
            <h3>Service Requests</h3>
            <p className="card-number">
              {serviceRequests.length} <span className="alert-text">pending requests</span>
            </p>
            <button onClick={() => handleOpenPopup(serviceRequests[0])}>
              View Request Details
            </button>
          </div>
        </div>
      </div>

      {/* Popup for Service Request Details */}
      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)} 
        requestData={selectedRequest} 
      />
    </div>
  );
}

export default Dashboard;
