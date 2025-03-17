import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-8">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`mx-1 px-4 py-2 rounded-lg ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-500 hover:text-white transition-colors`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;