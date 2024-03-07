import React from "react";
import StoreItem from "./StoreItem";

import "../shared/List.css";

function StoreList({ stores }) {
  return (
    <div id="list-map" className="list">
      {stores.map((store) => (
        <StoreItem key={store.id} store={store} />
      ))}
    </div>
  );
}

export default StoreList;
