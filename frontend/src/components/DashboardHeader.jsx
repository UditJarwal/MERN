import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Transaction Dashboard</h1>
      <div className="flex items-center">
        <input type="text" className="w-64 px-4 py-2 rounded-md border border-gray-300 mr-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search transaction" />
        <select className="w-48 px-4 py-2 rounded-md border border-gray-300">
          <option value="">Select Month</option>
          {/* Add options for months here */}
        </select>
      </div>
    </div>
  );
};

export default DashboardHeader;
