import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, CreditCardIcon, Info, XSquare } from "lucide-react";
import JoinToggler from "./JoinToggler";

const PaymentToggler = (id:any) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className=" mr-2">
          Join <ArrowRight className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <JoinToggler id={id}/>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentToggler;
