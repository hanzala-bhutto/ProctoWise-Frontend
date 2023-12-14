import { buttonVariants } from '@/components/ui/button';
import React from 'react';
import Im1 from './Images/im1';
export default function(){
    return(
    <div className="h-full bg-gray-400 dark:bg-gray-900">
	
	<div className="mx-auto">
		<div className="flex justify-center px-6 py-12">
			
			<div className="w-full xl:w-3/4 lg:w-11/12 flex">

				
				<div className="w-full lg:w-6/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
					<form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
						<div className="mb-4 md:flex md:justify-between">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                    First Name
                                </label>
								<input
                                    required
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                />
							</div>
							<div className="md:ml-2">
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
							</div>
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
                                placeholder="Email"
                            />
						</div>
						<div className="mb-4 md:flex md:justify-between">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                    Password
                                </label>
								<input
                                    required
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                />
								<p className="text-xs italic text-red-500">Please choose a password.</p>
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
                                    placeholder="******************"
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
							<a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="/participant/login">
								Already have an account? Login!
							</a>
						</div>
					</form>
				</div>

                <div className="flex items-center text-center justify-center w-full h-full bg-gray-400 dark:bg-gray-800 lg:w-6/12 bg-cover rounded-l-lg text-white"
                style={{ background: "linear-gradient(to right, #0074e4, #0083e4, #0096e4, #00aee4)" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur excepturi soluta, suscipit quam dolore ducimus incidunt architecto placeat, voluptatem facere ad, neque aperiam? Voluptatem nostrum sequi adipisci ea corrupti.
            </div>

			</div>
		</div>
	</div>
</div>)
}