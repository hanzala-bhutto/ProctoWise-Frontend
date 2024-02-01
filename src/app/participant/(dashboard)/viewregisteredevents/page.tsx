import EventCardDetails from "../../participantComponents/EventCardDetails";
import MainHeader from "../../participantComponents/MainHeader";
import eventData from "../../data/data.json";

const page = () => {
  interface EventProps {
    id: number;
    title: string;
    description: string;
    content: string;
    isJoined: boolean;
  }
  const events: EventProps[] = eventData.events;

  return (
    <>
      <MainHeader />
      <div className="flex flex-row flex-wrap flex-1 mt-2">
        {events.map((event, index) => (
          <EventCardDetails
            key={index}
            id={event.id}
            title={event.title}
            description={event.description}
            content={event.content}
            isJoined={event.isJoined}
          />
        ))}
      </div>
    </>
  );
};

export default page;
