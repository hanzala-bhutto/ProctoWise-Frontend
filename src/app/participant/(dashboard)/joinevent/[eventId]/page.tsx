import EventComponent from "@/app/participant/participantComponents/EventComponent";
import eventData from "../../../data/data.json";

const EventPage = ({ params }: { params: { eventId: string } }) => {
  const event = eventData.events.find(
    (event) => event.id.toString() === params.eventId
  );

  // Check if the event is found
  if (!event) {
    return <div>Event not found</div>;
  }

  // Display event details
  return <EventComponent event={event} />;
};

export default EventPage;
