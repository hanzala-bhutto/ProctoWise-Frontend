'use client';

import { useState, useEffect } from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import {python} from "@codemirror/lang-python";

import EditorFooter from "./EditorFooter";
import { Problem } from "@/utils/types/problem";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, firestore } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { problems } from "@/utils/problems";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRunCodeMutation, useSubmitCodeMutation } from "@/services/submission.service";
import { AppDispatch } from '../../../../redux/store';
import { addAttemptedTask } from "@/redux/submissionSlice";

type PlaygroundProps = {
	problem: Problem;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ISettings {
	fontSize: string;
	settingsModalIsOpen: boolean;
	dropdownIsOpen: boolean;
}

const Playground: React.FC<PlaygroundProps> = ({ problem, setSuccess, setSolved }) => {
	const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
	const [testCase, setTestCase] = useState<any>([]);
	let [userCode, setUserCode] = useState<string>(problem.starterCode);

	const [run] =  useRunCodeMutation();
	const [submit] = useSubmitCodeMutation();

	const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");

	const [settings, setSettings] = useState<ISettings>({
		fontSize: fontSize,
		settingsModalIsOpen: false,
		dropdownIsOpen: false,
	});

	// const [user] = useAuthState(auth);
	// const {
	// 	query: { pid },
	// } = useRouter();

	const participantID = useAppSelector((state) => state?.auth?.user?.id);
	const pid = useAppSelector((state) => state.task.taskID);
	const eventID = useAppSelector((state) => state.tasks.eventID);

	const submission = useAppSelector((state) => state?.submission);
	console.log(submission);

	const dispatch = useAppDispatch();


	// console.log(pid);

	useEffect(() => {
		const index = submission.attemptedTasks.findIndex(task => task.taskID === pid);
		if(index !== -1) {
			setUserCode(submission.attemptedTasks[index].code)
			// console.log('here');
		}
		// console.log(submission.submissionData);
	},[submission])

	const handleRun = async () => {
		// console.log(userCode);

		const request = {
			participantID: participantID,
			eventID: eventID,
			taskID: pid,
			userCode: userCode
		}

		// console.log(request);


		const response:any = await run(request).unwrap();

		if (response){
			// console.log(response);

			const useCase = response.map((useCase:any) => useCase.data);

			setTestCase(useCase);

			// console.log(useCase);

			alert('Success');
		}
		else{
			alert('Error');
		}

	}

	const handleSubmit = async () => {

		// console.log(userCode);

		dispatch(addAttemptedTask({taskID: pid, code:userCode, language: 'python'}))

		const request = {
			participantID: participantID,
			eventID: eventID,
			submissionData: {
				taskID: pid,
				code: userCode,
				language: 'python'
			}
		}

		// console.log(request);

		const response:any = await submit(request).unwrap();

		if (response){
			// console.log(response);

			const useCase = response.map((useCase:any) => useCase.data);

			setTestCase(useCase);

			// console.log(useCase);

			alert('Success');
		}
		else{
			alert('Error');
		}


	};

	// useEffect(() => {
	// 	const code = localStorage.getItem(`code-${pid}`);
	// 	// if (user) {
	// 	// 	setUserCode(code ? JSON.parse(code) : problem.starterCode);
	// 	// } else {
	// 	// }
	// 	setUserCode(problem.starterCode);
	// }, [pid, problem.starterCode]);

	const onChange = (value: string) => {
		setUserCode(value);
		// localStorage.setItem(`code-${pid}`, JSON.stringify(value));
	};

	return (
		<div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
			<PreferenceNav settings={settings} setSettings={setSettings} />

			<Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
				<div className='w-full overflow-auto'>
					<CodeMirror
						value={userCode}
						theme={vscodeDark}
						onChange={onChange}
						extensions={[python()]}
						style={{ fontSize: settings.fontSize }}
					/>
				</div>
				<div className='w-full px-5 pb-10 overflow-auto'>
					{/* testcase heading */}
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>

					<div className='flex'>
						{problem.examples.map((example, index) => (
							<div
								className='mr-2 items-start mt-2 '
								key={example.id}
								onClick={() => setActiveTestCaseId(index)}
							>
								<div className='flex flex-wrap items-center gap-y-4'>
									<div
										className={`before:inline-block before:mr-2 before:w-2 before:h-2 before:rounded-full before:bg-gray-500 font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
										${activeTestCaseId === index ? "text-white" : "text-gray-500"}
									`}
									>
										Case {index + 1}
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='font-semibold my-4'>
						{
							testCase.length>0?
								<div>
									<h1 className={`${testCase[activeTestCaseId]?.status?.description == 'Accepted' ? 'text-green-500' : 'text-red-500'}`}>
										{testCase[activeTestCaseId]?.status?.description
									}</h1>
								</div>
							:
							<></>
						}

						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{problem.examples[activeTestCaseId].inputText}
						</div>
						<p className='text-sm font-medium mt-4 text-white'>Expected:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{problem.examples[activeTestCaseId].outputText}
						</div>
						{
						testCase.length>0?
						<>
						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{testCase[activeTestCaseId]?.stdout}
						</div>
						</>
						:
						<></>
						}
					</div>
				</div>
			</Split>
			<EditorFooter handleRun={handleRun} handleSubmit={handleSubmit} />
		</div>
	);
};
export default Playground;
