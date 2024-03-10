import React from "react";
import "../shared/Item.css";

function StoreItem({ store }) {
  return (
    <div className="item">
      <div className="store-item">
        <img src={require("../../img/test_table.png")} alt={store.name} />
      </div>
      <div className="item-info">
        <a>{store.name}</a>
        <h2>{store.rating}</h2>
        <h2>{store.address}</h2>
        <h2>{store.hours}</h2>
        <h2>{store.telephone}</h2>
      </div>
      <div className="store-item">
        <button></button>
      </div>
    </div>
  );
}

export default StoreItem;
