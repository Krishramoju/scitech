import React from 'react';
import '../styles/ItemListing.css';

function ItemListing() {
  return (
    <div className="item-listing">
      <h2>Artwork Listings</h2>
      <p>Post new artworks and set bidding times.</p>
      <button className="add-item-btn">Add New Item</button>
      <div className="item-grid">
        {/* Render items here as cards */}
        <div className="item-card">
          <h3>Item Title</h3>
          <p>Bidding Ends: 24 hours</p>
        </div>
      </div>
    </div>
  );
}

export default ItemListing;
