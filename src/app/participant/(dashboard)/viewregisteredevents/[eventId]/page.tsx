'use client';
import EventComponent from "@/app/participant/participantComponents/EventComponent";
import eventData from "../../../data/data.json";
import { useEffect, useState } from "react";
import { useFindEventDetailsQuery } from "@/services/event.service";

interface CostDetails {
  amount: number;
  currency: string;
}

interface Event {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  costDetails: CostDetails;
}

const EventPage = ({ params }: { params: { eventId: string } }) => {

  console.log(params.eventId);  
  const {data} = useFindEventDetailsQuery(params.eventId);

  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    setEvent(data as Event);
    console.log(data);
  },[data])

  // const event = eventData.events.find(
  //   (event) => event.id.toString() === params.eventId
  // );


  return (
    <div>
    {event
      ? 
      <EventComponent event={event} />
      :
      <div>Event not found</div>  
    }
  </div>
  );

};

export default EventPage;
