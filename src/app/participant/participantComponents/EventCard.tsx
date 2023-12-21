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
import { ArrowRight } from "lucide-react";
import PaymentToggler from "./PaymentToggler";
interface EventProps {
  title: string;
  description: string;
  content: string;
}
const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const EventCard: React.FC<EventProps> = ({ title, description, content }) => {
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
          <PaymentToggler />
          <EventDetailsToggler />
        </p>
      </CardFooter>
    </Card>
  );
};
EventCard.propTypes = propTypes;

export default EventCard;
