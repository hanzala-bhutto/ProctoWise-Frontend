import EventCard from "../../participantComponents/EventCard";
import MainHeader from "../../participantComponents/MainHeader";
import eventData from "../../data/data.json";

interface EventProps {
  id: number;
  title: string;
  description: string;
  content: string;
}
const page = () => {
  const events: EventProps[] = eventData.events;

  return (
    <>
      <MainHeader />
      <div className="flex flex-row flex-wrap flex-1">
        {events.map((event, index) => (
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

export default page;
