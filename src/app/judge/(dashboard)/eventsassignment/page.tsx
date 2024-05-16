'use client';

import React, { useEffect, useState } from "react";
import eventData from "@/app/participant/data/data.json";
import EventCard from "../../JudgeComponents/EventCard";
import MainHeader from "../../JudgeComponents/MainHeader";
import { useAppSelector } from "@/redux/store";
import { useJudgeEventsQuery } from "@/services/event.service";

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

interface Event {
  _id: number;
  name: string;
  description: string;
}

const EventAssignment = () => {
  // const events: EventProps[] = eventData.events;
// 

  const judgeID = useAppSelector((state) => state.auth.user?.id);

  const {data} = useJudgeEventsQuery(judgeID);
  const [events,setEvent] = useState<Event[]>([]);

  useEffect(() => {
    console.log(data);
    setEvent(data as Event[]);
  },[data])


  // Filter events with assigned judgeId 1
  // const filteredEvents = events.filter((event) =>
  //   event.assignedJudges.some((judge) => judge.judgeId === 1)
  // );

  return (
    <>
      <MainHeader />
      <div className="flex flex-row flex-wrap flex-1">
        {events ? events.map((event, index) => (
          <EventCard
            key={index}
            id={event._id}
            title={event.name}
            description={event.description}
            // content={event.content}
          />
        ))
        :
        <h2>No Events Assigned</h2>
      }
      </div>
    </>
  );
};

export default EventAssignment;
