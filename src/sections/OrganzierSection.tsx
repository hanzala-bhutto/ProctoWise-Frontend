import Image from "next/image";
import Link from "next/link";

const OrganzierSection = () => {
  return (
    <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
            Ready to Organize Competitions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empower event organizers to efficiently manage and coordinate every
            aspect of their events with the comprehensive tools provided by
            Proctowise
          </p>
        </div>
      </div>

      {/* steps */}
      <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 1</span>
            <span className="text-xl font-semibold">Create Event</span>
            <span className="mt-2 text-zinc-700">
              Initiate new events with essential details
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 2</span>
            <span className="text-xl font-semibold">Manage Tasks</span>
            <span className="mt-2 text-zinc-700">
              Organize event tasks and activities
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 3</span>
            <span className="text-xl font-semibold">
              Coordinate Participants and Judges
            </span>
            <span className="mt-2 text-zinc-700">
              Invite, add, and remove participants and judges
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 4</span>
            <span className="text-xl font-semibold">Profile Management</span>
            <span className="mt-2 text-zinc-700">
              Update organizer profile information
            </span>
          </div>
        </li>
      </ol>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src="/1.jpg"
              alt="uploading preview"
              width={1419}
              height={732}
              quality={100}
              className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganzierSection;
