import React, { useState } from "react";
import StoreItem from "./StoreItem";
import StorePagination from "./StorePagination";
import "../shared/List.css";

function StoreList({ stores, pagination }) {
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지 변경함수
  const handleChangePage = (pageNumber) => {
    pagination.gotoPage(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <div id="list-map" className="list">
      {stores.map((store) => (
        <StoreItem key={store.id} store={store} />
      ))}
      <StorePagination
        currentPage={currentPage}
        totalPages={Math.ceil(pagination.totalCount / pagination.perPage)}
        onPageChange={handleChangePage}
      />
    </div>
  );
}

export default StoreList;
