"use client";
import { useState } from "react";
import data from "@/dataFile/datafile.json"; // Replace with the correct path to your data.json file

interface Organizer {
  name: string;
  email: string;
  isAttending: boolean;
}

interface User {
  name: string;
}

const ProfilePage: React.FC<{ user: User }> = ({ user }) => {
  const [organizers, setOrganizers] = useState<Organizer[]>(
    data.organizers.filter((organizer) => organizer.name === "S M Irtiza Aqa Naqvi")
  );

  const handleEditClick = () => {
    // For simplicity, let's toggle the 'isAttending' status when the Edit button is clicked
    const updatedOrganizers = [...organizers];
    updatedOrganizers[0].isAttending = !updatedOrganizers[0].isAttending;
    setOrganizers(updatedOrganizers);
  };

  return (
    <div className="w-full p-6 ">
      <h1 className="text-3xl font-semibold mb-4">Organizer Profile</h1>

      {organizers.map((organizer, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">{organizer.name}</h2>
          <p className="text-gray-800 mb-2">
            <strong>Email:</strong> {organizer.email}
          </p>
          <p className="text-gray-800 mb-2">
            <strong>Attending:</strong> {organizer.isAttending ? "Yes" : "No"}
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