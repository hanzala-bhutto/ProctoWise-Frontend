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
import { ArrowRight, InfoIcon } from "lucide-react";
import PaymentToggler from "./PaymentToggler";
import Link from "next/link";
interface EventProps {
  id: number;
  title: string;
  description: string;
  // content: string;
}
// const propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
// };

const EventCard: React.FC<EventProps> = ({
  id,
  title,
  description,
  // content,
}) => {
  return (
    <Card className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 my-2 mx-2 bg-blue-900 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <p>{content}</p> */}
        <p>id: {id}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <p className="flex justify-center ">
          <PaymentToggler id={id}/>
          <Button asChild>
            <Link href={`/participant/joinevent/${encodeURIComponent(id)}`}>
              Info <InfoIcon className="ml-2" />
            </Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};
// EventCard.propTypes = propTypes;

export default EventCard;
