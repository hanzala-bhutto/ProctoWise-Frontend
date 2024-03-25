'use client';

import Topbar from "@/components/TaskComponents/Topbar/Topbar";
import Workspace from "@/components/TaskComponents/Workspace/Workspace";
import useHasMounted from "@/hooks/useHasMounted";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import React from "react";
import { useAppDispatch } from '../../../../../redux/store';
import { setTaskID } from "@/redux/singleTaskSlice";

type ProblemPageProps = {
	pid: string;
};

const ProblemPage = ({ params }: { params: { taskId: string } }) => {
	const hasMounted = useHasMounted();
	const dispatch = useAppDispatch();

    console.log(params);

    const { taskId } = params;
	const problem = problems[taskId];
	
	dispatch(setTaskID({taskID:taskId}));

    console.log(problem,taskId);

	// if (!problem) {
	// 	return {
	// 		notFound: true,
	// 	};
	// }

	if (!hasMounted) return null;

	return (
		<div>
			<Topbar problemPage />
			<Workspace problem={problem} />
		</div>
	);
};
export default ProblemPage;

