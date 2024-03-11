import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PropTypes from "prop-types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfoIcon, MinusSquare } from "lucide-react";
import { useLeaveEventMutation } from "@/services/event.service";
import { useAppSelector } from "@/redux/store";

interface EventProps {
  id: number;
  title: string;
  description: string;
  // content: string;
  // isJoined: boolean;
}

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  // isJoined: PropTypes.bool.isRequired,
};

const EventCardDetails: React.FC<EventProps> = ({
  id,
  title,
  description,
  // content,
  // isJoined,
}) => {
  // if (!isJoined) {
  //   // If the event is not joined, don't render the card
  //   return null;
  // }

  const participantID = useAppSelector((state) => state.auth.user?.id);

  const [leaveEvent] = useLeaveEventMutation();

  const leaveEventHandler = async () => {

    const request = {
      eventID: id,
      participantID: participantID
    }

    const response:any  = await leaveEvent(request).unwrap();

    if (response.success){
      alert("Left Event Successfully");
    }
    else{
      // console.log(response.data.error);
      alert("Cannot Leave Event");
    }

  }

  return (
    <Card className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 my-2 mx-2 bg-blue-900 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>id: {id}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <p className="flex justify-center">
          <Button onClick={()=> leaveEventHandler()} className="mr-2">
            Leave <MinusSquare className="ml-2" />
          </Button>
          <Button asChild>
            <Link
              href={`/participant/viewregisteredevents/${encodeURIComponent(
                id
              )}`}
            >
              Info <InfoIcon className="ml-2" />
            </Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

EventCardDetails.propTypes = propTypes;

export default EventCardDetails;
