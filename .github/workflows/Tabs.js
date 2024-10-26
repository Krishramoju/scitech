import React from 'react';
import '../styles/Tabs.css';

function Tabs({ currentTab, setTab }) {
  return (
    <div className="tabs">
      <button onClick={() => setTab('items')}>Items</button>
      <button onClick={() => setTab('commissions')}>Commissions</button>
      <button onClick={() => setTab('workshops')}>Workshops</button>
      <button onClick={() => setTab('consultations')}>Consultations</button>
    </div>
  );
}

export default Tabs;
