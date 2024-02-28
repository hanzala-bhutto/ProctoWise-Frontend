import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog";



  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import { ArrowRight, CreditCardIcon, Info, XSquare } from "lucide-react";
// import JoinToggler from "./JoinToggler";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { handleUpload } from "@/utils/firestore/images";

export default function({image,setImage}){

    // const [image, setImage] = useState<File>();
 
    // const preImageLoad = () => {
    //     if(image.name != ''){

    //         const fileInput = document.getElementById('fileInput').textContent;
    //         console.log(fileInput);
    
    //         const myFile = new File([image.obj], image.obj.name, {
    //            type: 'text/plain',
    //            lastModified: new Date(),
    //         });
            
    //         const dataTransfer = new DataTransfer();
    //         dataTransfer.items.add(myFile);
    //         fileInput.files = dataTransfer.files;

    //     }
    // }

    // useEffect(() => {
    //     console.log(image);
    // },[image])

    const loadFile = (e: ChangeEvent<HTMLInputElement>) => {
            
        if (e.target.files && e.target.files[0]){
            const file = e.target.files[0]
            setImage((prevState:any) => ({ ...prevState, name:file.name,obj:file}));
          }
        else{
            alert('No image selected');
            return;
        }

        // var input = e.target;
        // var file = input.files[0];
        // var type = file.type;

       var output = document.getElementById('preview_img');


        output.src = URL.createObjectURL(e.target.files[0]);
        output.onload = function() {
            URL.revokeObjectURL(output.src) // free memory
        }
    };

    return (
        <Dialog>
        <DialogTrigger>
          <Button size={'sm'} className="mb-2">
            Upload /Take Image <ArrowRight className="" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          {/* <JoinToggler /> */}
          <Card>
          <CardHeader>
            <CardTitle>Upload Image</CardTitle>
            <CardDescription>

            <form>
  <div class="flex items-center space-x-6">
    <label class="block">
      <span class="sr-only">Choose profile photo</span>
      <input id="fileInput" type="file" onChange={(e)=>loadFile(e)} class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "/>
    </label>
  </div>
  <div class="shrink-0 mt-4">
      <img id='preview_img' class="object-cover h-48 w-full" src="https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c" alt="Current profile photo" />
    </div>
</form>

            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
          <CardFooter>
            {/* <Button>Select</Button> */}
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <DialogClose asChild>
          <Button size={'sm'} className="mb-2">
            Choose This Image
          </Button>

          </DialogClose>
        </div>

          </CardFooter>
        </Card>
        </DialogContent>
      </Dialog>   
    )
} 