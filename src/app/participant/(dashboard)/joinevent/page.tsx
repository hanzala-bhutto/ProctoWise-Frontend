'use client';

import EventCard from "../../participantComponents/EventCard";
import MainHeader from "../../participantComponents/MainHeader";
import eventData from "../../data/data.json";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { useFindAllEventsQuery } from "@/services/event.service";

interface EventProps {
  id: number;
  title: string;
  description: string;
  content: string;
}

interface Event {
  _id: number;
  name: string;
  description: string;
}

const JoinEvent = () => {
  // const events: EventProps[] = eventData.events;

  const participantID = useAppSelector((state) => state.auth.user?.id);

  const {data} = useFindAllEventsQuery([]);

  const [events,setEvent] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    // console.log(data);
    setEvent(data as Event[]);
    setFilteredEvents(data as Event[]);
  },[data])

  return (
    <>
      <MainHeader events={events} setFilteredEvents={setFilteredEvents}/>
      <div className="flex flex-row flex-wrap flex-1">
        {
        filteredEvents
        ?
        filteredEvents.map((event, index) => (
          <EventCard
            key={index}
            id={event._id}
            title={event.name}
            description={event.description}
            // content={event.content}
          />
        ))
        :
        <h1>No competitions Exist</h1>
      
        }
      </div>
    </>
  );
};

export default JoinEvent;
