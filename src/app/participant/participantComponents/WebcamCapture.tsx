import { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import {useState} from 'react';
import { Button } from "@/components/ui/button";
import { useDetectFaceMutation,useVerifyParticipantMutation } from "@/services/proctor.service";
import { useAppSelector } from "@/redux/store";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

export const WebcamCapture = () => {
  const webcamRef = useRef(null);

  const [imgSrc, setImgSrc] = useState(null);

  const [detectFace] = useDetectFaceMutation();

  const [verify] = useVerifyParticipantMutation();

  const participantID = useAppSelector((state) => state.auth.user?.id);

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef!.current!.getScreenshot();
      // console.log(imageSrc);
      setImgSrc(imageSrc);
      detectFaceHandler(imageSrc);
    },
    [webcamRef]
  );

  const detectFaceHandler = async (imageSrc:any) => {

    if (!imageSrc) return;
    const response : any = await detectFace({participantID: participantID,image: imageSrc}).unwrap();
    console.log(response);
    if (response.success){
      setImgSrc("data:image/jpeg;base64,"+response.data);
    }
    else{
      alert("Face not detected");
    }

  }

  const verifyParticipant = async () => {
    
    if (!imgSrc) return;
    const response:any = await verify({participantID: participantID,image: imgSrc}).unwrap();
    console.log(response);

    if (response.success){
      const data = response.data;
      if (data._distance<=0.5){
        alert('Verified');
      }
    }

  }

  return (
    <>

      <div className="container">
            
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="border-2 border-solid border-black">
                  <Webcam
                    audio={false}
                    height={720}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={1280}
                    videoConstraints={videoConstraints}
                  />
              </div>
                  <Button className=" w-1/2" onClick={capture}>Capture photo</Button>
            </div>

            <div className="mt-10">
            {imgSrc ?
              <div className="flex flex-col items-center gap-2">
                <img src={imgSrc} alt="webcam" />
                <Button className=" w-1/2" onClick={verifyParticipant}>Verify</Button>
              </div>
              :
              null
            }
            </div>
      </div>
    </>
  );
};