import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import ItemListing from '../components/ItemListing';
import Commissions from '../components/Commissions';
import Workshops from '../components/Workshops';
import Consultations from '../components/Consultations';

function SellerDashboard() {
  const [currentTab, setTab] = useState('items');

  return (
    <div>
      <Tabs currentTab={currentTab} setTab={setTab} />
      {currentTab === 'items' && <ItemListing />}
      {currentTab === 'commissions' && <Commissions />}
      {currentTab === 'workshops' && <Workshops />}
      {currentTab === 'consultations' && <Consultations />}
    </div>
  );
}

export default SellerDashboard;
