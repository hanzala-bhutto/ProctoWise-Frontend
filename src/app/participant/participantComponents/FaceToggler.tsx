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
import Webcam from "react-webcam";
import {WebcamCapture} from './../participantComponents/WebcamCapture'

const FaceToggler = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openWebcam, setOpenWebcam] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Dialog defaultOpen={true}>
                <DialogContent>
                    {openWebcam
                    ?
                    <WebcamCapture />
                    :
                    <Button onClick={()=>setOpenWebcam(true)}>
                        Verify Yourself
                    </Button>
                    
                    }

                </DialogContent>
            </Dialog>
        </>

    );
};

export default FaceToggler;
