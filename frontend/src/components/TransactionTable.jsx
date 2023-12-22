import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-gray-200 text-gray-600">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Category</th>
          <th className="px-4 py-2">Sold</th>
          <th className="px-4 py-2">Image</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className="border-b border-gray-200">
            <td className="px-4 py-2">{transaction.id}</td>
            <td className="px-4 py-2">{transaction.title}</td>
            <td className="px-4 py-2">{transaction.description}</td>
            <td className="px-4 py-2">{transaction.price}</td>
            <td className="px-4 py-2">{transaction.category}</td>
            <td className="px-4 py-2">{transaction.sold}</td>
            <td className="px-4 py-2">
              {/* Display image here */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
