'use client';

import EventCardDetails from "../../participantComponents/EventCardDetails";
import MainHeader from "../../participantComponents/MainHeader";
import eventData from "../../data/data.json";
import { useAppSelector } from "@/redux/store";
import { useParticipantEventsQuery } from "@/services/event.service";
import { useEffect, useState } from "react";

interface Event {
  _id: number;
  name: string;
  description: string;
}

const RegisteredEvents = () => {
  interface EventProps {
    id: number;
    title: string;
    description: string;
    // content: string;
    // isJoined: boolean;
  }
  // const events: EventProps[] = eventData.events;

  const participantID = useAppSelector((state) => state.auth.user?.id);

  const {data} = useParticipantEventsQuery(participantID);

  const [events,setEvent] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    // console.log(data);
    setEvent(data as Event[]);
    setFilteredEvents(data as Event[]);
  },[data])


  return (
    <>
      <MainHeader events={events} setFilteredEvents={setFilteredEvents} />
      <div className="flex flex-row flex-wrap flex-1 mt-2">
        {
        filteredEvents 
        ? 
        filteredEvents.map((event, index) => (
          <EventCardDetails
            key={index}
            id={event._id}
            title={event.name}
            description={event.description}
            // content={event.content}
            // isJoined={event.isJoined}
          />
        ))
        :
        <h1>No Registered Competitions Exist</h1>

        }
      </div>
    </>
  );
};

export default RegisteredEvents;
