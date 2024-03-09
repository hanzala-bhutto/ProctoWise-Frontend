import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ArrowRight, CreditCardIcon, Info, XSquare } from "lucide-react";
import { useEffect, useRef, useState, ChangeEvent } from 'react';
import {Elements, PaymentElement} from '@stripe/react-stripe-js';
import { useMakePaymentMutation } from "@/services/payment.service";
// import getStripe from "@/utils/getStripe";

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
  
  interface IPaymentForm {
    eventID: string;
    participantID: string;
    name: string;
    email: string;
    description: string;
    amount: number;
    currency: string;
    cardDetails: CardDetails;
  }

  interface CardDetails {
    cardNumber: string,
    month: string,
    year: string,
    cvc: string,
  }

const EventPaymentToggler = ({ event }: { event: EventProps }) => {

    const [
        makePayment, // This is the mutation trigger
      ] = useMakePaymentMutation()
    
    const participant = useAppSelector((state) => state?.auth?.user);
    
    const formRef = useRef<HTMLFormElement>(null);

    const [card, setCard] = useState<CardDetails>({
        cardNumber: '',
        month: '',
        year: '',
        cvc: '',
    })

    const [form, setForm] = useState<IPaymentForm>({
        eventID: '',
        participantID: '',
        name: '',
        email: '',
        description: '',
        amount: 0,
        currency: '',
        cardDetails: {
        cardNumber: '',
        month: '',
        year: '',
        cvc: '',}
    });
  
    useEffect(() => {
        setForm(prevState => ({...prevState, 
            participantID: participant.id,
            name: participant.name,
            email: participant.email,
            eventID: event._id,
            description: event.description,
            amount: event.costDetails.amount,
            currency: event.costDetails.currency
            }
            ))
    },[participant]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { name, value } = target;
    setCard({
      ...card,
      [name]: value,
    });
    // console.log(name,value);
    // console.log(card);
    };
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
  
    // for loop for Form 
    Object.keys(card).forEach((key) => {
        if(!card[key as keyof CardDetails]){
            // eslint-disable-next-line no-console
            console.log('undefined');
            return;
        }
    });
  
    // // eslint-disable-next-line no-console
    console.log(card, form);
  
    // const stripe = await getStripe();

    // const elements = stripe?.elements();

    // const cardElement = elements?.create('card', {
    //     style: {
    //       base: {
    //         fontSize: '16px',
    //         fontFamily: 'Arial, sans-serif'
    //       }
    //     }
    //   });
    // cardElement?.mount('#cardElement');

    // const stripeToken = await stripe?.createToken(cardElement!);

    setForm({
      ...form,
      cardDetails: card
    })
  
    const response = await makePayment(form).unwrap();
  
    // // eslint-disable-next-line no-console
    // console.log(response);
    if(response){
        alert('payment successful');
        return;
    }
    else{
      alert('payment failed');
      return;
    }
    };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className=" mr-2">
          Pay by Card <ArrowRight className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
  <form className="bg-white w-full max-w-3xl mx-auto px-6 py-8 shadow-md rounded-md flex mt-2">
    <div id="cardElement" className=" border-slate-300">
      <h1 className="text-center text-2xl font-bold">Payment Form</h1>
      <label className="font-bold text-sm mb-2 block">Card number:</label>
      <input onChange={handleChange} type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" id="cardNumber" maxLength={16} placeholder="XXXX XXXX XXXX XXXX" name="cardNumber" value={card.cardNumber} />
      <div className="flex gap-x-2 mb-2">
        <div className="flex-1">
          <label className="font-bold text-sm mb-2 block">Exp. month:</label>
          <input onChange={handleChange} type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" id="month" maxLength={1} placeholder="M" name="month" value={card.month} />
        </div>
        <div className="flex-1">
          <label className="font-bold text-sm mb-2 block">Exp. year:</label>
          <input onChange={handleChange} type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" id="expDate" maxLength={4} placeholder="YYYY" name="year" value={card.year} />
        </div>
        <div className="flex-1">
          <label className=" font-bold text-sm mb-2 block">CCV:</label>
          <input onChange={handleChange} type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" id="ccvNumber" maxLength={3} placeholder="123" name="cvc" value={card.cvc} />
        </div>
      </div>

      {/* <label className=" font-bold text-sm mb-2 block">Card holder:</label>
      <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="cardName" placeholder="John Doe" value="John Doe" /> */}
      <Button onClick={handleSubmit} className="mt-8 text-lg w-full">Pay {event.costDetails.amount} {event.costDetails.currency}</Button>
    </div>
  </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventPaymentToggler;
