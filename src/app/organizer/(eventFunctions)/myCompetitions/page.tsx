'use client';
import React, { useState, useEffect } from 'react';
import { useOrgGetCompDetailsQuery } from '@/services/event.service';
// import { Link } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { setEventID } from '@/redux/taskSlice';

interface Competition {
  competition_id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  eventID: string;
  _id : string;

}

const CompetitionsList = () => {
  const router=useRouter();
  const dispatch=useAppDispatch();
  let organizerID = "652d08760297ae65ff29d0b1";
  const { data }: any = useOrgGetCompDetailsQuery(organizerID);
  const [displayCompetitions, setDisplayCompetitions] = useState<Competition[]>([]);

  useEffect(() => {
    const showComp = async () => {
      if (data) {
        setDisplayCompetitions(data);
      }
    };
    showComp();
  }, [data]);

  const go = (eventID: string) => () => {
    console.log("hello")
    console.log(eventID);
    dispatch(setEventID({eventID:eventID}))
    router.push("manageEvent/tasks")
  }

  return (
    <div>
      {displayCompetitions.map((competition) => (
        <div key={competition?.competition_id} className="max-w-md bg-white shadow-lg rounded-xl overflow-hidden mx-auto mb-4 mt-10 transform transition-transform hover:scale-105">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              {/* Any additional content for md:flex-shrink-0 */}
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {competition?.name}
              </div>
              <p className="mt-2 text-gray-500">{competition?.description}</p>
              <div className="mt-4">
                <p>
                  <strong>Start Date:</strong> {competition?.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {competition?.endDate}
                </p>
                <p>
                  <strong>ID</strong> {competition?._id}
                </p>
                <div className='mt-3'>
                  <button className={buttonVariants({
                                    size: "sm",
                                  })}
                                  onClick={go(competition._id)}>
                    Manage
                  </button>


                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompetitionsList;
