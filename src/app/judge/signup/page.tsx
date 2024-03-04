'use client';

import { buttonVariants } from '@/components/ui/button';
import React from 'react';
import Im1 from './Images/im1';

import { useUserRegisterMutation } from '@/services/auth.service';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';


interface IRegisterForm {
    name: string,
    email: string,
    password: string,
    confirmPass: string
}

export default function Signup() {

    const [
        registerUser, // This is the mutation trigger
        ] = useUserRegisterMutation()
  
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState<IRegisterForm>({
      name: '',
      email: '',
      password: '',
      confirmPass: ''
    });

    const router = useRouter();
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { target } = event;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    //   console.log(form);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
  
      // for loop for Form 
      Object.keys(form).forEach((key) => {
          if(!form[key as keyof IRegisterForm]){
              // eslint-disable-next-line no-console
              console.log('undefined');
              return;
          }
      });
  
      if (form.password !== form.confirmPass){
            console.log(form.password, form.confirmPass);
            alert('passwords dont match');
            return;
      }

      // eslint-disable-next-line no-console
    //   console.log(form);

      const formSend = {
        name: form.name,
        email: form.email,
        password: form.password
      }
  
      const response = await registerUser(formSend).unwrap();
  
      if(response){
          alert('success');
          router.push('/judge/login');
          return;
      }
      else{
        alert('error');
        return;
      }
    };
  


    return(
    <div className="h-full bg-gray-400 dark:bg-gray-900">
	
	<div className="mx-auto">
		<div className="flex justify-center px-6 py-12">
			
			<div className="w-full xl:w-3/4 lg:w-11/12 flex">

				
				<div className="w-full lg:w-6/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
					<form 
                        className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        method="post"
                        >
						
                        <div className="mb-4">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                    User Name
                                </label>
								<input
                                    required
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="name"
                                />
							</div>
							{/* <div className="md:ml-2">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                    Last Name
                                </label>
								<input
                                    required
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                />
							</div> */}
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                Email
                            </label>
							<input
                                required
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name='email'
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                            />
						</div>
						<div className="mb-4 md:flex md:justify-between">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                    Password
                                </label>
								<input
                                    required
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="******************"
                                    value={form.password}
                                    onChange={handleChange}
                                />
								{/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
							</div>
							<div className="md:ml-2">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                                    Confirm Password
                                </label>
								<input
                                    required
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="c_password"
                                    type="password"
                                    name='confirmPass'
                                    placeholder="******************"
                                    value={form.confirmPass}
                                    onChange={handleChange}
                                />
							</div>
						</div>
						<div className="mb-6 text-center">
							<button 
                                className={buttonVariants({
                                    size: "sm",
                                  })}
                                type="submit"
                            >
                                Register Account
                            </button>
						</div>
						<hr className="mb-6 border-t" />
						<div className="text-center">
							<a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="#">
								Forgot Password?
							</a>
						</div>
						<div className="text-center">
                         <Link href="/judge/login">
							<p className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">
								Already have an account? Login!
							</  p>
                        </Link>
						</div>
					</form>
				</div>

                <div className="flex flex-col gap-8 items-center text-center justify-center w-full h-full bg-gray-400 dark:bg-gray-800 lg:w-6/12 bg-cover rounded-l-lg text-white"
                style={{ background: "linear-gradient(to right, #0074e4, #0083e4, #0096e4, #00aee4)" }}>
                <h1 className="text-4xl font-bold">Judge Registration</h1>
                <p className="px-2">To complete your registration, please fill out the form on the left with your username, email, password. Once you've provided all the required details, click the "Submit" button to finalize your registration.</p>

            </div>

			</div>
		</div>
	</div>
</div>)
}