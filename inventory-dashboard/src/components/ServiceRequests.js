import React from 'react';
import './ServiceRequests.css'; // Import your CSS file for styling

const Popup = ({ isOpen, onClose, requestData }) => {
  if (!isOpen) return null; // Don't render if not open

  const handleApprove = () => {
    // Logic to approve the request
    console.log('Request Approved:', requestData);
    onClose(); // Close the modal after action
  };

  const handleReject = () => {
    // Logic to reject the request
    console.log('Request Rejected:', requestData);
    onClose(); // Close the modal after action
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <header className="popup-header">
          <h2>Company Service Request Details</h2>
          <button onClick={onClose} className="close-button">X</button>
        </header>

        <div className="popup-content">
          <h3>{requestData?.companyName}</h3>
          <p><strong>Contact Person:</strong> {requestData?.contactPerson}</p>
          <p><strong>Service Type:</strong> {requestData?.serviceType}</p>
          <p><strong>Request Date:</strong> {requestData?.requestDate}</p>
          
          <h4>Contact Details</h4>
          <p><strong>Address:</strong> {requestData?.address}</p>
          <p><strong>Phone:</strong> {requestData?.phone}</p>
          <p><strong>Email:</strong> {requestData?.email}</p>
          
          <h4>Additional Information</h4>
          <p>{requestData?.notes}</p>

          {/* Sample Data for scrolling */}
          <h4>Sample Data</h4>
          <div className="sample-data">
            {requestData?.sampleData && requestData.sampleData.length > 0 ? (
              <ul>
                {requestData.sampleData.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            ) : (
              <p>No sample data available.</p>
            )}
          </div>
        </div>

        <footer className="popup-footer">
          <button onClick={handleApprove} className="approve-button">Approve Request</button>
          <button onClick={handleReject} className="reject-button">Reject Request</button>
          <button onClick={onClose} className="close-button">Close</button>
        </footer>
      </div>
    </div>
  );
};

export default Popup;
