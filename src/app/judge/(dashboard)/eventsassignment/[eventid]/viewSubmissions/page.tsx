'use client'

import { useParticipantSubmissionQuery } from "@/services/event.service";

import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Button } from "@/components/ui/button";

interface Participant {
    _id: number;
    email: string;
  }
const ViewSubmissions = ({ params }: { params: { eventid: string } }) => {

    const eventID = params.eventid;
    const {data} = useParticipantSubmissionQuery(eventID);
    const [participants,setParticipants] = useState<Participant[]>([]);

    useEffect(() => {
        if (data && data.success) {
            setParticipants(data.data); // Set participants to the data array
        }
    }, [data]);

  useEffect(()=>{
    console.log("participants: ",participants);
  },[participants])

    return(
        <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Participant ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {participants && Array.isArray(participants) && participants.map((participant,index) => (
          <TableRow key={participant._id}>
            <TableCell className="font-medium">
              {participant._id}
            </TableCell>
            {/* <TableCell>{participant.name}</TableCell> */}
            <TableCell>{participant.email}</TableCell>
            <TableCell>
              <Button>View Submission</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    )
}
export default ViewSubmissions;