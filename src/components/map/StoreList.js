import React, { useState } from "react";
import StoreItem from "./StoreItem";
import StorePagination from "./StorePagination";
import "../shared/List.css";

function StoreList({ stores }) {
  // 가정: 한 페이지에 음식점 10개
  const [currentPage, setCurrentPage] = useState(1);
  const storesPerPage = 10;

  // 현재 페이지에 보여줄 음식점
  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = stores.slice(indexOfFirstStore, indexOfLastStore);

  // 페이지 변경함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="list-map" className="list">
      {currentStores.map((store) => (
        <StoreItem key={store.id} store={store} />
      ))}
      <StorePagination
        currentPage={currentPage}
        totalPages={Math.ceil(stores.length / storesPerPage)}
        onPageChange={paginate}
      />
    </div>
  );
}

export default StoreList;
