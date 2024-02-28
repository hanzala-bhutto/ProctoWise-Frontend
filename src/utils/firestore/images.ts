import { ChangeEvent } from "react";
import {storage} from '../firebase';
import {ref, uploadBytesResumable, UploadTaskSnapshot, getDownloadURL, uploadBytes} from 'firebase/storage';

const handleChange = (e: ChangeEvent<HTMLInputElement>, setImage: any) => {

  if (e.target.files && e.target.files[0]){
    setImage(e.target.files[0]);
  }

}

const handleUpload = async (image:any) => {

  if (image){
    const storageRef = ref(storage, `participants/${image.name}`);

    // console.log(storageRef);

    // uploadBytes(storageRef, image.obj).then((snapshot) => {
    //   console.log('Uploaded an image');
    //   getDownloadURL(snapshot.ref).then(val=>{
    //     console.log(val);
    //     return val;
    //   })
    // });
    
    const snapshot = await uploadBytes(storageRef, image.obj);
    console.log('Uploaded an image');
    const url = await getDownloadURL(snapshot.ref);
    console.log(url);
    return url;

  }

}

export {handleChange,handleUpload};

