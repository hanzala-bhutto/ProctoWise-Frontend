'use client'
import { buttonVariants } from '@/components/ui/button';
import React, { useState, useEffect, useRef } from 'react';
import {useRouter} from 'next/navigation';
import { setAuth } from '@/redux/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useCreateEventsMutation } from '@/services/event.service';


    interface User{
      id: string;
      name: string;
      email: string;
    }

    interface ICreateEventForm {
      name: string,
      status: boolean,
      description:string,
      autoGrade:boolean,
      organizerID:string,
      startDate:string,
      endDate:string
    }

    interface ICreateEventResponse {
        jwt: string,
        user: User
    }



    export default function () {

      const [
        createEvent, // This is the mutation trigger
      ] = useCreateEventsMutation()

    const dispatch = useAppDispatch();

    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
    const organizerID = useAppSelector((state) => state.auth.user?.id);

    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated) {
        // router?.push(protectedRoutes.DASHBOARD);
      }
    },[isAuthenticated, router])

    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState<ICreateEventForm>({
    name: '',
    status: true,
    description:'',
    autoGrade:true,
    organizerID:"",
    startDate:new Date().toISOString().split('T')[0],
    endDate:new Date().toISOString().split('T')[0]
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    };

    const handleSubmit = async (e:any) => {
      e.preventDefault();

    // for loop for Form 
    Object.keys(form).forEach((key) => {
        if(!form[key as keyof ICreateEventForm]){
            // eslint-disable-next-line no-console
            console.log('undefined');
            return;
        }
    });

    // // eslint-disable-next-line no-console
    console.log(form);

    const formData = {
      name: form.name,
      status: true,
      description:form.description,
      autoGrade:true,
      organizerID:organizerID,
      startDate:form.startDate,
      endDate:form.endDate
    }

    const response : ICreateEventResponse | unknown = await createEvent(formData).unwrap();

    // // eslint-disable-next-line no-console
    // console.log(response);
    if(response){
      dispatch(setAuth(response as ICreateEventResponse));
        alert('success');
        return;
    }
    else{
      alert('error');
      return;
    }
    };



  // const minDate = new Date().toISOString().split('T')[0];
  // const [startDate, setStartDate] = useState(minDate);
  // const [endDate, setEndDate] = useState(minDate);
  // const router = useRouter();
  
  // function create(event) {
  //   event.preventDefault()
  //   router.push('/organizer/manageEvent/tasks');
  // }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <form action="" onSubmit={handleSubmit} ref={formRef}>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-red-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">X</div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Create an Event</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Event Title</label>
                    <input required type="text" value={form.name} name="name" onChange={handleChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Start</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          required
                          type="date"
                          min={form.startDate}
                          value={form.startDate}
                          name="startDate"
                          onChange={handleChange}
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        />
                        <div className="absolute left-3 top-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">End</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          required
                          type="date"
                          min={form.startDate} // Set min date as startDate
                          value={form.endDate}
                          name="endDate"
                          onChange={handleChange}
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        />
                        <div className="absolute left-3 top-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Event Description</label>
                    <input required type="text" value={form.description} onChange={handleChange} name="description" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Mandatory" />
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-center space-x-4">
                  <button
                    type="submit"
                    className={buttonVariants({
                      size: "lg",
                    })}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
