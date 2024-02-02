'use client';
import React, { useState, useEffect } from 'react';
import { useOrgGetCompDetailsQuery } from '@/services/event.service';

interface Competition {
  competition_id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;

}

const CompetitionsList = () => {
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompetitionsList;
