"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EventPaymentToggler from "./EventPaymentToggler";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useValidatePaymentMutation } from "@/services/payment.service";
import PaymentCard from "./PaymentCard";
import { setEventID } from "@/redux/taskSlice";

interface CostDetails {
  amount: number;
  currency: string;
}

interface EventProps {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  costDetails: CostDetails;
}

interface PaymentEntry{
  _id: string;
  status: string;
  chargeID: string;
}

function EventComponent({ event }: { event: EventProps }) {
  // const startTime = new Date(event.startDate.toISOString());
  const [remainingTime, setRemainingTime] = useState<string | null>(null);
  const [eventStarted, setEventStarted] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);

  const dispatch=useAppDispatch();


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const timeLeftValue = calculateTimeLeft(startTime);
  //     setRemainingTime(timeLeftValue);

  //     // Check if the event has started
  //     if (timeLeftValue === "Start") {
  //       setEventStarted(true);
  //     }
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [startTime]);

  // function calculateTimeLeft(startTime: Date) {
  //   const now = new Date();
  //   const difference = startTime.getTime() - now.getTime();

  //   if (difference <= 0) {
  //     setIsTimeOver(true);
  //     return "Time's Over! You can Start Now";
  //   }

  //   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor(
  //     (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //   return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  // }
  // return (
  //   <div className="p-4">
  //     <div className="max-w-2xl mx-auto">
  //       <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
  //       <p>id: {event._id}</p>
  //       <div className="mb-4">
  //         <h2 className="text-2xl font-bold mb-2">Description</h2>
  //         <p>{event.description}</p>
  //       </div>
  //       {/* <div className="mb-4">
  //         <h2 className="text-2xl font-bold mb-2">Content</h2>
  //         <p>Content</p>
  //       </div> */}
  //       <div>
  //       <h2 className="text-2xl font-bold mb-2">Time</h2>

  //       <p className="mb-2">Start Date: {event.startDate}</p>
  //       {(
  //         <p className="mb-2">End Date: {event.endDate}</p>
  //       )}
  //       </div>
  //       {isTimeOver && (
  //         <Button className=" text-white px-4 py-2 rounded">
  //           <a href="http://localhost:3001/problems/two-sum">Start</a>
  //         </Button>
  //       )}
        
  //     </div>
  //   </div>
  // );

  const participantID = useAppSelector((state) => state.auth.user?.id);

  const [validatePayment] = useValidatePaymentMutation();
  const [paymentEntry, setPaymentEntry] = useState<PaymentEntry>({
    _id: '',
    status: '',
    chargeID: ''
  }); 


  useEffect( ()=> {
    const fetchPayment = async () => {
    try{
      const paymentRequest = {
        eventID: event._id,
        participantID: participantID
      }
  
      const response:any = await validatePayment(paymentRequest).unwrap();
      // console.log(response);
      if(response.success){
        setPaymentEntry(response.data);
      }
      else{
        alert(response.message);
      }
    }
    catch(err){alert(err)};
    }
    fetchPayment();

  },[])

  // useEffect(()=>{
  //     console.log(paymentEntry);
  // },[paymentEntry])

  return (
    <>
    <h1 className="text-3xl">Event : {event.name}</h1>
    <hr />
    <Tabs defaultValue="agreement" className="">
    <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="agreement">Agreement</TabsTrigger>
      <TabsTrigger value="info">Info</TabsTrigger>
      <TabsTrigger value="payment">Payment</TabsTrigger>
      {/* <TabsTrigger value="invite">Invite</TabsTrigger> */}
    </TabsList>
    <TabsContent value="agreement">
      <Card>
        <CardHeader>
          <CardTitle>Agreement</CardTitle>
          <CardDescription>
            Make sure to properly read the agreement provided.
            <p className="text-gray-800 my-2">
              Participants must adhere to the established code of conduct,
              fostering a respectful and inclusive environment for all.
            </p>
            <p className="font-bold my-2">Submission Guidelines:</p>
            <ul className="list-disc ml-8">
              <li>Follow specified code format and naming conventions.</li>
              <li>
                Include all required documentation with your submission.
              </li>
            </ul>
            <p className="text-red-500 my-2">
              Participants must ensure the authenticity of their work and
              refrain from plagiarism or unfair practices.
            </p>
            <p className="font-medium my-2">Evaluation Criteria:</p>
            <ul className="list-disc ml-8">
              <li>Code functionality and correctness.</li>
              <li>Efficiency and optimization of the solution.</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center space-x-2">
           
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </CardContent>
        <CardFooter>
        {
          paymentEntry?.status === 'paid' 
          ?
          <Button onClick={()=>dispatch(setEventID({eventID:event._id}))}><Link href={`/participant/tasks`} target="blank">Start</Link></Button>
          :
          <EventPaymentToggler event={event}/>
        }

        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="info">
      <Card>
        <CardHeader>
          <CardTitle>{event.name}</CardTitle>
          <CardDescription className=" text-lg">
          <div className="my-2">
            <span className="font-bold my-2">id: </span>
            <span>{event._id}</span>
          </div>
          <div className="my-2">
            <span className="font-bold mb-2">description: </span>
            <span>{event.description}</span>
          </div>
          <div className="my-2">
            <span className="font-bold mb-2">startDate: </span>
            <span>{event.startDate}</span>
          </div>
          <div className="my-2">
            <span className="font-bold">endDate: </span>
            <span>{event.endDate}</span>
          </div>
          </CardDescription>
        </CardHeader>

        <CardFooter>
        </CardFooter>
      </Card>
    </TabsContent>

    <TabsContent value="payment">
      <Card>
        <CardHeader>
          <CardTitle>Make Payment</CardTitle>
          <CardDescription>
            To secure your participation in the coding competition, please
            complete the payment process below. Kindly review the details and
            follow the instructions carefully. If you encounter any issues or
            have questions, feel free to reach out to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="font-bold text-lg my-2">Payment Amount: ${event?.costDetails?.amount} {event?.costDetails?.currency}</p>
          <p className="my-2">Accepted Payment Methods:</p>
          <ul className="list-disc ml-8">
            <li>Credit/Debit Card</li>
          </ul>
        </CardContent>
        <CardFooter>
          {
          paymentEntry?.status === 'paid' 
          ?
          <PaymentCard _id={paymentEntry._id} status={paymentEntry.status} chargeID={paymentEntry.chargeID}/>
          :
          <EventPaymentToggler event={event}/>
          }
          {/* <Button>Pay by Card</Button> */}
        </CardFooter>
      </Card>
    </TabsContent>
    {/* <TabsContent value="invite">
      <Card>
        <CardHeader>
          <CardTitle>Want to Invite Members?</CardTitle>
          <CardDescription>
            You can invite your members by inviting them
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button>Invite Member</Button>
        </CardFooter>
      </Card>
    </TabsContent> */}
  </Tabs>
  </>
  )

}

// function convertTimeStringToDaysHoursMinutes(startTime: string): {
//   days: number;
//   hours: number;
//   minutes: number;
// } {
//   const startDate = new Date(startTime);
//   const currentDate = new Date();

//   const timeDifference = startDate.getTime() - currentDate.getTime();

//   // Calculate days, hours, and minutes
//   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

//   return { days, hours, minutes };
// }

// function calculateStartTime(
//   days: number,
//   hours: number,
//   minutes: number
// ): Date {
//   const currentDate = new Date();
//   return new Date(
//     currentDate.setHours(hours, minutes, 0, 0) + days * 24 * 60 * 60 * 1000
//   );
// }

export default EventComponent;
