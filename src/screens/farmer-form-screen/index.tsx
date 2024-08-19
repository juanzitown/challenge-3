import React from 'react';
import { useParams } from 'react-router-dom';

function FarmerFormScreen() {
  let params = useParams();
  console.log(params)
  return (
    <div>
      <h1>This is the Farmer Form Screen</h1>
    </div>
  );
}

export default FarmerFormScreen;
