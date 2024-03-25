'use client'
import React, { useEffect, useState } from "react";
import { useDeletejudgeFromEventMutation, useJudgeJoinEventMutation, useJudgeWRTEventsDetailsQuery } from "@/services/event.service";
import { useAppSelector } from "@/redux/store";


interface judge {
  _id: string;
  name: string;
  email: string;
  invitation_status: string;
}


const judgesPage = () => {
  const [
    insertjudgeEvent, // This is the mutation trigger
  ] = useJudgeJoinEventMutation()

  const [
    deletejudge, // This is the mutation trigger
  ] = useDeletejudgeFromEventMutation()
  const eventID = useAppSelector((state)=>state.tasks.eventID);
  const { data } = useJudgeWRTEventsDetailsQuery(eventID);
  const [judges, setjudges] = useState<judge[]>([]); 
  const [filteredjudges, setfilteredjudges] = useState<judge[]>([]);
  
  useEffect(() => {
    if (data) {
      console.log("hello " + data);
      setjudges(data); 
      setfilteredjudges(data);
    }
  }, [data]); 

  // Handler to invite or remove judge
  const handleInviteRemove = async(judgeID:string) => {
    if (judges.find((judge) => judge._id === judgeID)?.invitation_status === "Uninvited") {
      const formData={
        judgeID: judgeID,
        eventID: eventID
      }
      const response = await insertjudgeEvent(formData).unwrap();
      console.log(response);
    }

    else if(judges.find((judge) => judge._id === judgeID)?.invitation_status === "Invited"){
      const formData={
        judgeID: judgeID,
        eventID: eventID
      }
      console.log(formData);
      const response = await deletejudge(formData).unwrap();
      console.log(response);
    }
    setfilteredjudges((prevjudges) =>
    prevjudges.map((judge) =>
      judge._id === judgeID
        ? {
            ...judge,
            invitation_status:
              judge.invitation_status === "Uninvited"
                ? "Invited"
                : "Uninvited"
          }
        : judge
    )
  );

  setjudges((prevjudges) =>
    prevjudges.map((judge) =>
      judge._id === judgeID
        ? {
            ...judge,
            invitation_status:
              judge.invitation_status === "Uninvited"
                ? "Invited"
                : "Uninvited"
          }
        : judge
    )
  );
  };

  const search = (e:string) =>{
    const filteredjudges = judges.filter((judge) => judge.name.toLowerCase().includes(e.toLowerCase()))
    setfilteredjudges(filteredjudges);
  }

  return (
    <div className="mt-8 mb-8">
      <h1 className="text-3xl font-semibold mb-4">Add Judges</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 mb-4"
        // value={searchTerm}
        onChange={(e) => search(e.target.value)}
      />

      {/* judges Table */}
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
          {filteredjudges ?
          filteredjudges.map((judge, index) => (
            <tr key={judge._id}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{judge.name}</td>
              <td className="border border-gray-300 p-2">{judge.email}</td>
              <td className="border border-gray-300 p-2 flex justify-center">
                <button
                  onClick={() => handleInviteRemove(judge._id)}
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

export default judgesPage;
