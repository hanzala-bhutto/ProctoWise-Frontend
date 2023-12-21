import React from "react";
import MainHeader from "../../participantComponents/MainHeader";
import StartEventCard from "../../participantComponents/StartEventCard";
interface EventProps {
  title: string;
  description: string;
  content: string;
  startTime: Date; // Add start time attribute
}

const page = () => {
  function calculateStartTime(
    days: number,
    hours: number,
    minutes: number
  ): Date {
    const currentDate = new Date();
    return new Date(
      currentDate.setHours(hours, minutes, 0, 0) + days * 24 * 60 * 60 * 1000
    );
  }
  const events: EventProps[] = [
    {
      title: "Event 1",
      description: "Description for Event 1",
      content: "Content for Event 1",
      startTime: calculateStartTime(0, 15, 44), // Today at 3:40 PM
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      content: "Content for Event 2",
      startTime: calculateStartTime(2, 22, 30), // Day after tomorrow at 10:30 PM
    },
    {
      title: "Event 3",
      description: "Description for Event 3",
      content: "Content for Event 3",
      startTime: calculateStartTime(3, 3, 0), // After 3 days at 3:00 AM
    },
    {
      title: "Event 4",
      description: "Description for Event 4",
      content: "Content for Event 4",
      startTime: calculateStartTime(30, 13, 30), // In 30 days at 1:30 PM
    },
    {
      title: "Event 5",
      description: "Description for Event 5",
      content: "Content for Event 5",
      startTime: calculateStartTime(7, 11, 30), // In 7 days at 11:30 AM
    },
    // ... Add start times for other events similarly
  ];
  return (
    <div>
      <MainHeader />
      <div className="flex flex-row flex-wrap flex-1 mt-2">
        {events.map((event, index) => (
          <StartEventCard
            key={index}
            title={event.title}
            description={event.description}
            content={event.content}
            startTime={event.startTime}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
