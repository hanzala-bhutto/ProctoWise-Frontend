"use client";
import { useState } from "react";
import data from "./../../data/data.json"; // Replace with the correct path to your data.json file

interface Participant {
  name: string;
  email: string;
  isAttending: boolean;
}

interface User {
  name: string;
}

const ProfilePage = () => {
  const [participants, setParticipants] = useState<Participant[]>(
    data.participants.filter((participant) => participant.name === "Jane Smith")
  );

  const handleEditClick = () => {
    // For simplicity, let's toggle the 'isAttending' status when the Edit button is clicked
    const updatedParticipants = [...participants];
    updatedParticipants[0].isAttending = !updatedParticipants[0].isAttending;
    setParticipants(updatedParticipants);
  };

  return (
    <div className="w-full p-6 ">
      <h1 className="text-3xl font-semibold mb-4">Participant Profile</h1>

      {participants.map((participant, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">{participant.name}</h2>
          <p className="text-gray-800 mb-2">
            <strong>Email:</strong> {participant.email}
          </p>
          <p className="text-gray-800 mb-2">
            <strong>Attending:</strong> {participant.isAttending ? "Yes" : "No"}
          </p>
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit Profile
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
