'use client'
import React, { useState } from "react";

const judgesPage = () => {
  const [judges, setjudges] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "invited" },
    { id: 2, name: "Jane Doe", email: "jane@example.com", status: "not invited" },
    // Add more judges as needed
  ]);

  const handleInviteRemove = (judgeId) => {
    // Implement logic to handle invite/remove action
    // You can update the judge's status or perform other actions
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-semibold mb-4">Add Judges</h1>
      
      {/* Search Bar (you may need to implement the search functionality) */}
      <input
        type="text"
        placeholder="Search by name..."
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 mb-4"
      />
      
      {/* judges Table */}
      <table className="w-full shadow-xl" style={{borderRadius:"13px"}}>
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">S.No</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Invite/Remove</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {judges.map((judge, index) => (
            <tr key={judge.id}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{judge.name}</td>
              <td className="border border-gray-300 p-2">{judge.email}</td>
              <td className="border border-gray-300 p-2 flex justify-center">
                <button
                  onClick={() => handleInviteRemove(judge.id)}
                  className="bg-indigo-500 text-white px-2 py-1 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-700"
                >
                  Invite
                </button>
              </td>
              <td className="border border-gray-300 p-2">{judge.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default judgesPage;
