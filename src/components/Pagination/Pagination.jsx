import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 border rounded  text-text disabled:opacity-50"
      >
        &lt;
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNum = index + 1;
        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`px-3 py-2 border rounded font-secondary tracking-primary ${currentPage === pageNum
              ? "bg-secondary text-tertiary"
              : "bg-primary text-mainText"
              }`}
          >
            {pageNum}
          </button>
        );
      })}



      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 border rounded  text-text disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
