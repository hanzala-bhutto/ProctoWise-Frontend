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
import PaymentToggler from "./PaymentToggler";
import { Button } from "@/components/ui/button";
import { MinusSquare } from "lucide-react";

interface EventProps {
  title: string;
  description: string;
  content: string;
  isJoined: boolean;
}

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isJoined: PropTypes.bool.isRequired,
};

const EventCardDetails: React.FC<EventProps> = ({
  title,
  description,
  content,
  isJoined,
}) => {
  if (!isJoined) {
    // If the event is not joined, don't render the card
    return null;
  }

  return (
    <Card className=" w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 my-2 mx-2 bg-blue-900 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p className="flex justify-center ">
          <Button className="mr-2">
            Leave <MinusSquare className="ml-2" />
          </Button>
          <EventDetailsToggler />
        </p>
      </CardFooter>
    </Card>
  );
};

EventCardDetails.propTypes = propTypes;

export default EventCardDetails;
