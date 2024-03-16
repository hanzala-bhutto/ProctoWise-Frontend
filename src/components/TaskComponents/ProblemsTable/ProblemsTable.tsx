import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
// import YouTube from "react-youtube";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import { DBProblem } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";
import { useGetAllTasksByEventIDQuery } from "@/services/task.service";
import { useAppSelector } from "@/redux/store";

interface Problem {
	_id: string;
	name: string;
	description: string;
	order: number;
	category: string;
	difficulty: string;
} 

type ProblemsTableProps = {
	setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ setLoadingProblems }) => {
	// const [youtubePlayer, setYoutubePlayer] = useState({
	// 	isOpen: false,
	// 	videoId: "",
	// });
	const problems : Problem[] = useGetProblems(setLoadingProblems);

	// const problems = useState({});

	const solvedProblems = useGetSolvedProblems();
	// console.log("solvedProblems", solvedProblems);
	// const closeModal = () => {
	// 	setYoutubePlayer({ isOpen: false, videoId: "" });
	// };

	// useEffect(() => {
	// 	const handleEsc = (e: KeyboardEvent) => {
	// 		if (e.key === "Escape") closeModal();
	// 	};
	// 	window.addEventListener("keydown", handleEsc);

	// 	return () => window.removeEventListener("keydown", handleEsc);
	// }, []);

	return (
		<>
			<tbody className='text-white'>
				{problems ? 
				problems.map((problem, idx) => {
					const difficulyColor =
						problem.difficulty === "Easy"
							? "text-dark-green-s"
							: problem.difficulty === "Medium"
							? "text-dark-yellow"
							: "text-dark-pink";
					return (
						<tr className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`} key={problem._id}>
							<th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
								{solvedProblems.includes(problem._id) && <BsCheckCircle fontSize={"18"} width='18' />}
							</th>
							<td className='px-6 py-4'>
								{(
									<Link
										className='hover:text-blue-600 cursor-pointer'
										href={`/participant/tasks/${encodeURIComponent(
											problem._id
										  )}`}
									>
										{problem.name}
									</Link>
								)}
							</td>
							<td className={`px-6 py-4 ${difficulyColor}`}>{problem.difficulty}</td>
							<td className={"px-6 py-4"}>{problem.category}</td>
						</tr>
					);
				})
				: <div>No Problems available</div>
				}
			</tbody>
		</>
	);
};
export default ProblemsTable;

function useGetProblems(setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>) {
// 	const [problems, setProblems] = useState<DBProblem[]>([]);

	const [problems, setProblems] = useState<Problem[]>([]);				
	const eventID = useAppSelector((state) => state.tasks?.eventID)


	
	const {data} = useGetAllTasksByEventIDQuery(eventID);

	useEffect(() =>{
		setProblems(data as Problem[]);
		setLoadingProblems(false);
	},[data])
	


// 	// useEffect(() => {k
// 	// 	const getProblems = async () => {
// 	// 		// fetching data logic
// 	// 		setLoadingProblems(true);
// 	// 		const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
// 	// 		const querySnapshot = await getDocs(q);
// 	// 		const tmp: DBProblem[] = [];
// 	// 		querySnapshot.forEach((doc) => {
// 	// 			tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
// 	// 		});
// 	// 		setProblems(tmp);
// 	// 		setLoadingProblems(false);
// 	// 	};

// 	// 	getProblems();
// 	// }, [setLoadingProblems]);
	return problems;
}

function useGetSolvedProblems() {
	const [solvedProblems, setSolvedProblems] = useState<string[]>([
		"problem1"
	]);
// 	// const [user] = useAuthState(auth);

// 	useEffect(() => {
// 		const getSolvedProblems = async () => {
// 			const userRef = doc(firestore, "users", user!.uid);
// 			const userDoc = await getDoc(userRef);

// 			if (userDoc.exists()) {
// 				setSolvedProblems(userDoc.data().solvedProblems);
// 			}
// 		};

// 		if (user) getSolvedProblems();
// 		if (!user) setSolvedProblems([]);
// 	}, [user]);

	return solvedProblems;
}
