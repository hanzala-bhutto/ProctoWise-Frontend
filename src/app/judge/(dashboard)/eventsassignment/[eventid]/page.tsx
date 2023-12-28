import React from "react";
import eventData from "@/app/participant/data/data.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface EventPageProps {
  params: { eventId: string };
}

const EventPage: React.FC<EventPageProps> = ({ params }) => {
  // Assuming eventData contains information about the event

  // Generate 10 participants
  const generateParticipants = () => {
    const participants = [];
    for (let i = 1; i <= 10; i++) {
      participants.push({
        participantId: i,
        name: `Participant ${i}`,
        email: `participant${i}@example.com`,
      });
    }
    return participants;
  };

  const participantList = generateParticipants();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Participant ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {participantList.map((participant) => (
          <TableRow key={participant.participantId}>
            <TableCell className="font-medium">
              {participant.participantId}
            </TableCell>
            <TableCell>{participant.name}</TableCell>
            <TableCell>{participant.email}</TableCell>
            <TableCell>
              <Button>View Submission</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EventPage;
