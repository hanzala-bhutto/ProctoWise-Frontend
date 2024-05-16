"use client";

import { useAppSelector } from "@/redux/store";
import Link from 'next/link';


interface Organizer {
  id: string;
  name: string;
  email: string;
}

interface User {
  name: string;
}

const ProfilePage = () => {

  const organizer : Organizer | null = useAppSelector((state) => state.auth?.user);

  
  return (
    <div className="w-full pt-6 px-6 h-screen flex flex-col">
      <h1 className="text-3xl font-semibold mb-4">Organizer Profile</h1>
      
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div className="p-4">
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        className="h-20 w-20 p-5 text-white bg-gray-500 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </div>
                </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a>{organizer?organizer?.name:'name'}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">{organizer?organizer?.email:'email'}</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{organizer?organizer?.id:'id'}</p>
                  <div className="w-full mt-8">
                      <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                          <Link href="/organizer/settings">
                              Edit
                          </Link>
                      </button>
                  </div>
              </div>              
      </div>


    </div>
  );
};

export default ProfilePage;