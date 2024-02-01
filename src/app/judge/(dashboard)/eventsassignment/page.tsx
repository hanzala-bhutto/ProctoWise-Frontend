import React from "react";
import eventData from "@/app/participant/data/data.json";
import EventCard from "../../JudgeComponents/EventCard";
import MainHeader from "../../JudgeComponents/MainHeader";

interface EventProps {
  id: number;
  title: string;
  description: string;
  content: string;
  isJoined: boolean;
  startTime: string;
  assignedJudges: { judgeId: number }[];
  participantList?: {
    participantId: number;
    name: string;
    email: string;
  }[];
}

const EventAssignment = () => {
  const events: EventProps[] = eventData.events;

  // Filter events with assigned judgeId 1
  const filteredEvents = events.filter((event) =>
    event.assignedJudges.some((judge) => judge.judgeId === 1)
  );

  return (
    <>
      <MainHeader />
      <div className="flex flex-row flex-wrap flex-1">
        {filteredEvents.map((event, index) => (
          <EventCard
            key={index}
            id={event.id}
            title={event.title}
            description={event.description}
            content={event.content}
          />
        ))}
      </div>
    </>
  );
};

export default EventAssignment;
