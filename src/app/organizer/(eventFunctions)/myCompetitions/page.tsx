import React from 'react';
import data from '@/dataFile/datafile.json';

interface Competition {
  competition_id: string;
  competition_name: string;
  start_date: string;
  end_date: string;
  Description: string;
}

const CompetitionCard: React.FC<Competition> = ({
  competition_name,
  start_date,
  end_date,
  Description,
}) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-xl overflow-hidden mx-auto mb-4 mt-10 transform transition-transform hover:scale-105">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {competition_name}
          </div>
          <p className="mt-2 text-gray-500">{Description}</p>
          <div className="mt-4">
            <p>
              <strong>Start Date:</strong> {start_date}
            </p>
            <p>
              <strong>End Date:</strong> {end_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompetitionsList: React.FC = () => {
  return (
    <div className="justify-center">
      {data.competitions.map((competition: Competition) => (
        <CompetitionCard key={competition.competition_id} {...competition} />
      ))}
    </div>
  );
};

export default CompetitionsList;
