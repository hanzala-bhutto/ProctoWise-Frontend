import EventCard from "../../participantComponents/EventCard";
import MainHeader from "../../participantComponents/MainHeader";
interface EventProps {
  title: string;
  description: string;
  content: string;
}
const page = () => {
  const events: EventProps[] = [
    {
      title: "Event 1",
      description: "Description for Event 1",
      content: "Content for Event 1",
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      content: "Content for Event 2",
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      content: "Content for Event 2",
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      content: "Content for Event 2",
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      content: "Content for Event 2",
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      content: "Content for Event 2",
    },
  ];
  return (
    <>
      <MainHeader />
      <div className="flex flex-row flex-wrap flex-1">
        {events.map((event, index) => (
          <EventCard
            key={index}
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
