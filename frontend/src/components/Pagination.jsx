import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center">
        <p className="mr-4">Page No: {currentPage}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <p>Per Page: 10</p>
    </div>
  );
};

export default Pagination;
