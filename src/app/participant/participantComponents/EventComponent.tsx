"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

interface EventProps {
  title: string;
  description: string;
  content: string;
  startTime: string;
  isJoined: boolean;
}

function EventComponent({ event }: { event: EventProps }) {
  const startTime = new Date(event.startTime);
  const [remainingTime, setRemainingTime] = useState<string | null>(null);
  const [eventStarted, setEventStarted] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeLeftValue = calculateTimeLeft(startTime);
      setRemainingTime(timeLeftValue);

      // Check if the event has started
      if (timeLeftValue === "Start") {
        setEventStarted(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startTime]);

  function calculateTimeLeft(startTime: Date) {
    const now = new Date();
    const difference = startTime.getTime() - now.getTime();

    if (difference <= 0) {
      setIsTimeOver(true);
      return "Time's Over! You can Start Now";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }
  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Description</h2>
          <p>{event.description}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Content</h2>
          <p>{event.content}</p>
          {!event.isJoined && !isTimeOver && (
            <Button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={false} // Always enabled since we're not checking the time
            >
              Join Now
            </Button>
          )}
        </div>
        <p className="mb-2">Start Time: {startTime.toLocaleString()}</p>
        {event.isJoined && (
          <p className="mb-2">Remaining Time: {remainingTime}</p>
        )}
        {isTimeOver && (
          <Button className=" text-white px-4 py-2 rounded">
            <a href="http://localhost:3001/problems/two-sum">Start</a>
          </Button>
        )}
      </div>
    </div>
  );
}

function convertTimeStringToDaysHoursMinutes(startTime: string): {
  days: number;
  hours: number;
  minutes: number;
} {
  const startDate = new Date(startTime);
  const currentDate = new Date();

  const timeDifference = startDate.getTime() - currentDate.getTime();

  // Calculate days, hours, and minutes
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
}

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

export default EventComponent;
