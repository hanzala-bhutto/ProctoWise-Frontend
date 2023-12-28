'use client'
import React, { useState } from "react";
import datafile from "@/dataFile/datafile.json";

const JudgePage = () => {
  const initialjudge = datafile.judges.map((judge) => ({
    ...judge,
    invitation_status: "Uninvited",
  }));

  const [judge, setjudge] = useState(initialjudge);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInviteRemove = (judgeEmail) => {
    setjudge((prevjudge) =>
      prevjudge.map((judge) =>
        judge.email === judgeEmail
          ? {
              ...judge,
              invitation_status:
                judge.invitation_status === "Uninvited"
                  ? "Invited"
                  : "Uninvited",
            }
          : judge
      )
    );
  };

  const filteredjudge = judge.filter((judge) =>
    judge.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-semibold mb-4">Add judge</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* judge Table */}
      <table className="w-full shadow-xl" style={{ borderRadius: "13px" }}>
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
          {filteredjudge.map((judge, index) => (
            <tr key={judge.email}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{judge.name}</td>
              <td className="border border-gray-300 p-2">{judge.email}</td>
              <td className="border border-gray-300 p-2 flex justify-center">
                <button
                  onClick={() => handleInviteRemove(judge.email)}
                  className={`${
                    judge.invitation_status === "Uninvited"
                      ? "bg-indigo-500 hover:bg-indigo-600"
                      : "bg-red-500 hover:bg-red-600"
                  } text-white px-2 py-1 rounded-md focus:outline-none focus:ring focus:border-indigo-700`}
                >
                  {judge.invitation_status === "Uninvited"
                    ? "Invite"
                    : "Remove"}
                </button>
              </td>
              <td className="border border-gray-300 p-2">
                {judge.invitation_status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JudgePage;
