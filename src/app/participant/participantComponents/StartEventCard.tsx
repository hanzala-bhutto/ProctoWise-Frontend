"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PropTypes from "prop-types";
import EventDetailsToggler from "./EventDetailsToggler";

interface EventProps {
  title: string;
  description: string;
  content: string;
  startTime: Date;
}

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  startTime: PropTypes.instanceOf(Date).isRequired,
};

const StartEventCard: React.FC<EventProps> = ({
  title,
  description,
  content,
  startTime,
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startTime));
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeLeftValue = calculateTimeLeft(startTime);
      setTimeLeft(timeLeftValue);

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
      return "Start";
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
    <Card className="w-1/3 my-2 mx-2 bg-blue-900 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p className="flex justify-center ">
          {eventStarted ? <Button>Start</Button> : <Button>{timeLeft}</Button>}
          <EventDetailsToggler />
        </p>
      </CardFooter>
    </Card>
  );
};

StartEventCard.propTypes = propTypes;

export default StartEventCard;
