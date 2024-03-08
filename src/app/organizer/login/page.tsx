'use client';

import { buttonVariants } from '@/components/ui/button';
import React from 'react';
import { setAuth } from '@/redux/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useOrgLoginMutation, useUserLoginMutation } from '@/services/auth.service';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react';

interface User{
  id: string;
  name: string;
  email: string;
}

interface ILoginForm {
    email: string,
    password: string,
    rememberMe: boolean
}

interface ILoginResponse {
    jwt: string,
    user: User
}

  
const Login=()=>{
    
  const [
    loginOrg, // This is the mutation trigger
  ] = useOrgLoginMutation()

  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const orgID = useAppSelector((state) => state.auth.user?.id);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      // router?.push(protectedRoutes.DASHBOARD);
    }
  },[isAuthenticated, router])

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ILoginForm>({
  email: '',
  password: '',
  rememberMe: false,
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
      if(!form[key as keyof ILoginForm]){
          // eslint-disable-next-line no-console
          console.log('undefined');
          return;
      }
  });

  // // eslint-disable-next-line no-console
  console.log(form);

  const formData = {
    email: form.email,
    password: form.password,
  }

  const response : ILoginResponse | unknown = await loginOrg(formData).unwrap();

  // // eslint-disable-next-line no-console
  
  if(response){
    console.log(response + " kkk");
    dispatch(setAuth(response as ILoginResponse));
      alert('success');

      
      if(orgID){
        localStorage.setItem("orgID",orgID);
      }
      console.log(localStorage.getItem("orgID") + " id reveal");
      // console.log(response);
      router.push('/organizer/dashboard');
      return;
  }
  else{
    alert('error');
    return;
  }
  };


    return(
        
  <div className="container h-full p-5">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div
          className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
           
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
              
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo" />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    PROCTOWISE
                  </h4>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                  <p className="mb-4">Please login to your account</p>
                 
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="text"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="shadow-lg peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Email
                    </label>
                  </div>

               
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      className="shadow-lg peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput11"
                      placeholder="Password" />
                    <label
                      htmlFor="exampleFormControlInput11"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Password
                    </label>
                  </div>

                 
                  <div className="flex flex-col justify-center mb-12 pb-1 pt-1 text-center">
                  <button className='w-full bg-black text-white p-1 rounded-xl'
                  type="submit"
                  >
                    Log in
                  </button>

                    <a href="#!" className='mt-4'>Forgot password?</a>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <Link
                    href="/organizer/signup"
                    className={buttonVariants({
                      size: "sm",
                    })}
                  >
                    Register
                  </Link>
                  </div>
                </form>
              </div>
            </div>

            <div
              className="flex items-center text-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
              style= {{background: "linear-gradient(to right, #0074e4, #0083e4, #0096e4, #00aee4)"}}>
              <div className="flex flex-col gap-8 px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="text-3xl font-semibold">
                  Organizer Login
                </h4>
                <p className="">
                To complete your login process, please fill out the form on the left with your email and password. Once you've provided all the required details, click the "Submit" button to login.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
export default Login;