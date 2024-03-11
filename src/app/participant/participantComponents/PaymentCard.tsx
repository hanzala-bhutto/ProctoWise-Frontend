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

interface PaymentEntryProps{
    _id: string;
    status: string;
    chargeID: string;
  }

const PaymentCard: React.FC<PaymentEntryProps> = ({
  _id,
  status,
  chargeID,
  // content,
}) => {

    // console.log(_id, status, chargeID);

  return (
    <Card className="flex flex-col w-full my-2 mx-2 bg-gray-700 text-white">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Payment Details</CardTitle>
        <CardDescription className="text-md pt-4">payment_ID: <span className="font-bold">{_id}</span></CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        {/* <p>{content}</p> */}
        <p className="pt-0">charge_ID: <span className="font-bold">{chargeID}</span></p>
      </CardContent>
      <CardFooter className="mt-auto">
        <p className="">
            status: <span className="font-bold">{status}</span>
        </p>
      </CardFooter>
    </Card>
  );
};
// EventCard.propTypes = propTypes;

export default PaymentCard;
