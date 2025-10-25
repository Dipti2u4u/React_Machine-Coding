import React, { useState } from 'react';
import './App.css'

// Mock toastr for notifications (replace with actual import)
const toastr = {
  success: (message) => alert(`Success: ${message}`),
  error: (message) => alert(`Error: ${message}`)
};

// Individual Offer Row Component
const OfferRow = ({ offer, onAccept, onReject, loading }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING': return '#ff9800';
      case 'ACCEPTED': return '#4caf50';
      case 'REJECTED': return '#f44336';
      case 'EXPIRED': return '#757575';
      default: return '#9e9e9e';
    }
  };

  const formatPrice = () => {
    return `$${parseFloat(offer.totalPrice).toFixed(2)}`;
  };

  return (
    <div className="offer-row">
      {/* Concise Row - Always Visible */}
      <div className="offer-summary">
        <div className="chef-info">
          <span className="chef-name">{offer.chefName}</span>
          <span className="chef-experience">{offer.experience}</span>
        </div>
        
        <div className="price-info">
          <span className="total-price">{formatPrice()}</span>
          <span className="price-breakdown">
            ${offer.pricePerUnit} × {offer.quantity} {offer.unit}
          </span>
        </div>

        <div className="status-section">
          <span 
            className="status-badge"
            style={{ backgroundColor: getStatusColor(offer.status) }}
          >
            {offer.status}
          </span>
        </div>

        <div className="actions-section">
          <button 
            className="btn-details"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? '▼' : '▶'}
          </button>
          
          {offer.status === 'PENDING' && (
            <>
              <button 
                className="btn-accept"
                onClick={() => onAccept(offer.id)}
                disabled={loading}
              >
                Accept
              </button>
              <button 
                className="btn-reject"
                onClick={() => onReject(offer.id)}
                disabled={loading}
              >
                Reject
              </button>
            </>
          )}
        </div>
      </div>

      {/* Detailed View - Expandable */}
      {showDetails && (
        <div className="offer-details">
          <div className="details-grid">
            <div className="detail-group">
              <h4>Timing</h4>
              <div className="detail-item">
                <label>Delivery Date:</label>
                <span>{new Date(offer.deliveryDate).toLocaleDateString()}</span>
              </div>
              <div className="detail-item">
                <label>Cooking Time:</label>
                <span>{offer.cookingTime}</span>
              </div>
            </div>

            <div className="detail-group">
              <h4>Contact</h4>
              <div className="detail-item">
                <label>Phone:</label>
                <span>{offer.contactPhone}</span>
              </div>
              <div className="detail-item">
                <label>Email:</label>
                <span>{offer.contactEmail}</span>
              </div>
            </div>

            <div className="detail-group full-width">
              <h4>Food Details</h4>
              {offer.ingredients && (
                <div className="detail-item">
                  <label>Ingredients:</label>
                  <span>{offer.ingredients}</span>
                </div>
              )}
              {offer.allergens && (
                <div className="detail-item">
                  <label>Allergens:</label>
                  <span>{offer.allergens}</span>
                </div>
              )}
              {offer.preparationMethod && (
                <div className="detail-item">
                  <label>Preparation:</label>
                  <span>{offer.preparationMethod}</span>
                </div>
              )}
            </div>

            {offer.notes && (
              <div className="detail-group full-width">
                <h4>Chef's Notes</h4>
                <p className="chef-notes">{offer.notes}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Main Concise Offer List Component
const ConciseOfferList = ({ 
  offers = [], 
  preorderTitle = '',
  onAcceptOffer = null,
  onRejectOffer = null,
  loading = false 
}) => {
  const [sortBy, setSortBy] = useState('price_low');

  // Sort offers based on selected criteria
  const sortedOffers = [...offers].sort((a, b) => {
    switch (sortBy) {
      case 'price_low':
        return parseFloat(a.totalPrice) - parseFloat(b.totalPrice);
      case 'price_high':
        return parseFloat(b.totalPrice) - parseFloat(a.totalPrice);
      case 'chef_name':
        return a.chefName.localeCompare(b.chefName);
      case 'delivery_date':
        return new Date(a.deliveryDate) - new Date(b.deliveryDate);
      case 'status':
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  const handleAcceptOffer = async (offerId) => {
    if (onAcceptOffer) {
      onAcceptOffer(offerId);
    }
    toastr.success(`Offer accepted! Chef will contact you soon.`);
  };

  const handleRejectOffer = async (offerId) => {
    if (onRejectOffer) {
      onRejectOffer(offerId);
    }
    toastr.success(`Offer rejected.`);
  };

  if (offers.length === 0) {
    return (
      <div className="empty-state">
        <h3>No offers received</h3>
        <p>No chefs have submitted offers for "{preorderTitle}" yet.</p>
      </div>
    );
  }

  return (
    <div className="offer-list-container">
      {/* Header */}
      <div className="list-header">
        <div className="header-info">
          <h2>Offers for "{preorderTitle}"</h2>
          <span className="offers-count">{offers.length} offer{offers.length !== 1 ? 's' : ''}</span>
        </div>
        
        <div className="sort-controls">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="chef_name">Chef Name</option>
            <option value="delivery_date">Delivery Date</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>

      {/* Offers List */}
      <div className="offers-list">
        {sortedOffers.map((offer) => (
          <OfferRow
            key={offer.id}
            offer={offer}
            onAccept={handleAcceptOffer}
            onReject={handleRejectOffer}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

// Demo App with Mock Data
const App = () => {
  // Mock JSON data for offers
  const mockOffers = [
    {
      id: 'offer_001',
      chefName: 'Maria Rodriguez',
      experience: 'Professional Chef - 8 years',
      pricePerUnit: 12.50,
      quantity: 4,
      unit: 'portions',
      totalPrice: '50.00',
      deliveryDate: '2024-12-17',
      cookingTime: '3 hours',
      contactPhone: '+1-555-0123',
      contactEmail: 'maria.chef@example.com',
      ingredients: 'Organic flour, farm eggs, San Marzano tomatoes, fresh basil, parmesan',
      allergens: 'Contains gluten, eggs, dairy',
      preparationMethod: 'Fresh made to order',
      notes: 'I use only organic ingredients and can accommodate dietary restrictions. I have 8 years of experience with Italian cuisine.',
      status: 'PENDING'
    },
    {
      id: 'offer_002',
      chefName: 'David Kim', 
      experience: 'Home Cook - 3 years',
      pricePerUnit: 10.00,
      quantity: 6,
      unit: 'portions',
      totalPrice: '60.00',
      deliveryDate: '2024-12-18',
      cookingTime: '2 hours',
      contactPhone: '+1-555-0456',
      contactEmail: 'davidkim@example.com',
      ingredients: 'Regular flour, eggs, canned tomatoes, herbs, mozzarella',
      allergens: 'Contains gluten, eggs, dairy',
      preparationMethod: 'Partially prepared',
      notes: 'I love making traditional pasta dishes and can adjust spice levels.',
      status: 'PENDING'
    },
    {
      id: 'offer_003',
      chefName: 'Sarah Thompson',
      experience: 'Culinary School Graduate',
      pricePerUnit: 15.00,
      quantity: 3,
      unit: 'portions', 
      totalPrice: '45.00',
      deliveryDate: '2024-12-16',
      cookingTime: '4 hours',
      contactPhone: '+1-555-0789',
      contactEmail: 'sarah.gourmet@example.com',
      ingredients: 'Premium semolina, organic eggs, truffle oil, wild mushrooms, aged parmesan',
      allergens: 'Contains gluten, eggs, dairy',
      preparationMethod: 'Gourmet fresh preparation',
      notes: 'Specializing in gourmet pasta with premium ingredients. Perfect for special occasions with truffle oil finishing.',
      status: 'ACCEPTED'
    },
    {
      id: 'offer_004',
      chefName: 'Tony Ricci',
      experience: 'Family Recipe Expert',
      pricePerUnit: 8.50,
      quantity: 5,
      unit: 'portions',
      totalPrice: '42.50',
      deliveryDate: '2024-12-19',
      cookingTime: '90 minutes',
      contactPhone: '+1-555-0321',
      contactEmail: 'tony.ricci@example.com',
      ingredients: 'Traditional flour, eggs, homemade tomato sauce, fresh herbs',
      allergens: 'Contains gluten, eggs',
      preparationMethod: 'Traditional family method',
      notes: 'Using my grandmother\'s 50-year-old recipe. Simple, authentic, and delicious.',
      status: 'REJECTED'
    }
  ];

  const handleAcceptOffer = (offerId) => {
    console.log('Accepting offer:', offerId);
  };

  const handleRejectOffer = (offerId) => {
    console.log('Rejecting offer:', offerId);
  };

  return (
    <div style={{ 
      padding: '20px',
      background: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        color: '#333'
      }}>
        <h1>Concise Offer List Demo</h1>
        <p style={{ color: '#666', margin: '8px 0' }}>
          Click the arrow buttons to expand/collapse offer details
        </p>
      </div>
      
      <ConciseOfferList
        offers={mockOffers}
        preorderTitle="Homemade Italian Pasta"
        onAcceptOffer={handleAcceptOffer}
        onRejectOffer={handleRejectOffer}
        loading={false}
      />
    </div>
  );
};

export default App;




// import React from "react";
// import Progressbar from "../src/Components/Progressbar";


// export default function App() {
//   const progressData = [20, 50, 80];

//   return (
//     <div className="App">
//       <h1>Dynamic Progress Bars</h1>
//       <Progressbar progress={progressData} />
//     </div>
//   );
// }

