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
import { InfoIcon, SendIcon } from "lucide-react";
import Link from "next/link";
interface EventProps {
  id: number;
  title: string;
  description: string;
  // content: string;
}
const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const EventCard: React.FC<EventProps> = ({
  id,
  title,
  description,
  // content,
}) => {
  return (
    <Card className=" w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 my-2 mx-2 bg-blue-900 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content not available</p>
      </CardContent>
      <CardFooter>
        <p className="flex justify-center ">
          <Button asChild>
            <Link href={`/judge/eventsassignment/${encodeURIComponent(id)}`}>
              View Submissions <SendIcon className="ml-2" />
            </Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
