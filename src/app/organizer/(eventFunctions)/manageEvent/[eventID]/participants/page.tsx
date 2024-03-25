'use client'
import React, { useEffect, useState } from "react";
import { useDeleteParticipantFromEventMutation, useJoinEventMutation, useParticipantDetailsQuery, useParticipantWRTEventsDetailsQuery } from "@/services/event.service";
import { useAppSelector } from "@/redux/store";


interface Participant {
  _id: string;
  name: string;
  email: string;
  invitation_status: string;
}


const ParticipantsPage = () => {
  const [
    insertParticipantEvent, // This is the mutation trigger
  ] = useJoinEventMutation()

  const [
    deleteParticipant, // This is the mutation trigger
  ] = useDeleteParticipantFromEventMutation()
  const eventID = useAppSelector((state)=>state.tasks.eventID);
  const { data } = useParticipantWRTEventsDetailsQuery(eventID);
  const [participants, setParticipants] = useState<Participant[]>([]); 
  const [filteredParticipants, setfilteredParticipants] = useState<Participant[]>([]);
  
  useEffect(() => {
    
    if (data) {
      console.log("hello " + data);
      setParticipants(data); 
      setfilteredParticipants(data);
    }
  }, [data]); 

  // Handler to invite or remove participant
  const handleInviteRemove = async(participantID:string) => {
    if (participants.find((participant) => participant._id === participantID)?.invitation_status === "Uninvited") {
      const formData={
        participantID: participantID,
        eventID: eventID
      }
      const response = await insertParticipantEvent(formData).unwrap();
      console.log(response);
    }

    else if(participants.find((participant) => participant._id === participantID)?.invitation_status === "Invited"){
      const formData={
        participantID: participantID,
        eventID: eventID
      }
      console.log(formData);
      const response = await deleteParticipant(formData).unwrap();
      console.log(response);
    }
    setfilteredParticipants((prevParticipants) =>
    prevParticipants.map((participant) =>
      participant._id === participantID
        ? {
            ...participant,
            invitation_status:
              participant.invitation_status === "Uninvited"
                ? "Invited"
                : "Uninvited"
          }
        : participant
    )
  );

  setParticipants((prevParticipants) =>
    prevParticipants.map((participant) =>
      participant._id === participantID
        ? {
            ...participant,
            invitation_status:
              participant.invitation_status === "Uninvited"
                ? "Invited"
                : "Uninvited"
          }
        : participant
    )
  );
  };

  const search = (e:string) =>{
    const filteredParticipants = participants.filter((participant) => participant.name.toLowerCase().includes(e.toLowerCase()))
    setfilteredParticipants(filteredParticipants);
  }

  return (
    <div className="mt-8 mb-8">
      <h1 className="text-3xl font-semibold mb-4">Add Participants</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 mb-4"
        // value={searchTerm}
        onChange={(e) => search(e.target.value)}
      />

      {/* Participants Table */}
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
          {filteredParticipants ?
          filteredParticipants.map((participant, index) => (
            <tr key={participant._id}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{participant.name}</td>
              <td className="border border-gray-300 p-2">{participant.email}</td>
              <td className="border border-gray-300 p-2 flex justify-center">
                <button
                  onClick={() => handleInviteRemove(participant._id)}
                  className={`${
                    participant.invitation_status === "Uninvited"
                      ? "bg-indigo-500 hover:bg-indigo-600"
                      : "bg-red-500 hover:bg-red-600"
                  } text-white px-2 py-1 rounded-md focus:outline-none focus:ring focus:border-indigo-700`}
                >
                  {participant.invitation_status === "Uninvited"
                    ? "Invite"
                    : "Remove"}
                </button>
              </td>
              <td className="border border-gray-300 p-2">
                {participant.invitation_status}
              </td>
            </tr>
          ))
          :
          <div>
            does not exist
          </div>
          }

        </tbody>
      </table>
    </div>
  );
};

export default ParticipantsPage;
