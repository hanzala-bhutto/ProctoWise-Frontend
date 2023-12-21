import EventCardDetails from "../../participantComponents/EventCardDetails";
import MainHeader from "../../participantComponents/MainHeader";

const page = () => {
  interface EventProps {
    title: string;
    description: string;
    content: string;
    isJoined: boolean;
  }

  const events: EventProps[] = [
    {
      title: "Event 1",
      description: "Description for Event 1",
      content: "Content for Event 1",
      isJoined: true,
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      content: "Content for Event 2",
      isJoined: false,
    },
    {
      title: "Event 3",
      description: "Description for Event 3",
      content: "Content for Event 3",
      isJoined: true,
    },
    {
      title: "Event 4",
      description: "Description for Event 4",
      content: "Content for Event 4",
      isJoined: false,
    },
    {
      title: "Event 5",
      description: "Description for Event 5",
      content: "Content for Event 5",
      isJoined: true,
    },
    {
      title: "Event 6",
      description: "Description for Event 6",
      content: "Content for Event 6",
      isJoined: false,
    },
  ];

  return (
    <>
      <MainHeader />
      <div className="flex flex-row flex-wrap flex-1 mt-2">
        {events.map((event, index) => (
          <EventCardDetails
            key={index}
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
