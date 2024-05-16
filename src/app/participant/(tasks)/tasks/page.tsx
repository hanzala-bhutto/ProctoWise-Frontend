'use client';

import ProblemsTable from "@/components/TaskComponents/ProblemsTable/ProblemsTable";
import Topbar from "@/components/TaskComponents/Topbar/Topbar";
import { Button } from "@/components/ui/button";
import useHasMounted from "@/hooks/useHasMounted";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setSubmission } from "@/redux/submissionSlice";
import { useSubmitEventMutation } from "@/services/submission.service";

import { useEffect, useState } from "react";
import FaceToggler from "../../participantComponents/FaceToggler";

export default function Home() {
	const [loadingProblems, setLoadingProblems] = useState(true);
	const hasMounted = useHasMounted();

	const [submitEvent] = useSubmitEventMutation();

	const participantID = useAppSelector((state) => state?.auth?.user?.id);
	const eventID = useAppSelector((state) => state.tasks.eventID);
	const request = useAppSelector((state) => state?.submission);

	const dispatch = useAppDispatch();

	useEffect(()=> {
		dispatch(setSubmission({eventID, participantID}))
	},[])

	if (!hasMounted) return null;

	const handleSubmitEvent = async () => {


		// console.log(request);

		const response = await submitEvent(request).unwrap();

		if(response){
			alert("Sucessfully submitted")
			// console.log(response);
		}
		else{
			alert("Failed to submit")
		}

	}

	return (
		<>
		<FaceToggler />
			<main className='bg-dark-layer-2 min-h-screen'>
				<Topbar />
				<h1
					className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5'
				>
					&ldquo; Tasks To Attempt &rdquo; 👇
				</h1>
				<div className='relative overflow-x-auto mx-auto px-6 pb-10'>
					{loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)}
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
						{!loadingProblems && (
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th>
								</tr>
							</thead>
						)}
						<ProblemsTable setLoadingProblems={setLoadingProblems} />
					</table>
				</div>
				<footer className="flex justify-center">
					<Button onClick={handleSubmitEvent} className=" bg-green-600 hover:bg-purple-600">Submit Event</Button>
				</footer>
			</main>
		</>
	);
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};
