
export const SlotCard = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-80 dark:bg-gray-800 dark:border-gray-700">
            <div className=" rounded-se-lg px-6 py-2 bg-primary-500">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white line-clamp-1">Project Evaluation</h5>
                <div className="flex justify-between">
                    <p className="text-white text-sm">20/09/2023</p>
                    <p className="text-white text-sm">Attendance Open</p>
                </div>
            </div>
            <div className="px-6 py-5">

                <div className="flex justify-between"><span className=" font-semibold text-gray-700 dark:text-gray-300">Start Time: </span><span className="text-gray-700 dark:text-gray-400">16:15</span></div>
                <div className="flex justify-between"><span className="font-semibold text-gray-700 dark:text-gray-300">End Time: </span><span className="text-gray-700 dark:text-gray-400">17:10</span></div>
                <div className="flex justify-between mb-10"><span className="font-semibold text-gray-700 dark:text-gray-300">Credit Hours: </span><span className="text-gray-700 dark:text-gray-400">10</span></div>
                <div className="flex justify-center">
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-blue-800">
                        Mark Attendance
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    );
}