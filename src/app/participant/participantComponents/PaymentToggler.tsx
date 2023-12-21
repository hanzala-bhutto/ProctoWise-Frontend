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

const PaymentToggler = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className=" mr-2">
          Join <ArrowRight className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you wnat to make Payment</DialogTitle>
          <DialogDescription className="flex flex-col">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet pharetra dui. Donec convallis laoreet elit nec facilisis.
              Praesent eu orci velit. Mauris lobortis, risus quis posuere
              condimentum, ipsum nisi blandit felis, eget vehicula nisl urna a
              justo. Praesent magna magna, bibendum nec gravida et, aliquam
              vitae est. Suspendisse varius tortor at molestie imperdiet.
              Phasellus sed volutpat massa. Donec vulputate, sapien ac lacinia
              semper, diam mi convallis purus, quis accumsan elit odio sed
              tellus. Sed in nisl vel nisi maximus malesuada ac non risus.
              Mauris interdum interdum sapien, et venenatis enim eleifend quis.
              Nulla mollis vel ligula id porttitor. Vestibulum ut convallis
              erat. Etiam posuere eget ante eget sodales.
            </div>
            <div className="flex flex-row justify-center items-center gap-1 mt-2">
              <Button>
                Pay Now <CreditCardIcon className="ml-2" />
              </Button>
              <Button>
                Cancel <XSquare className="ml-2" />
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentToggler;
