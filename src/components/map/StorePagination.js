import React from "react";
import "./StorePagination.css";

function StorePagination({ currentPage, totalPages, onPageChange }) {
  // 페이지 번호 생성함수
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="map-pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => onPageChange(number)}
              href="#"
              className={`page-link ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default StorePagination;
