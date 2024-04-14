import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMultiplyTwoNumbers = `def multiplyTwoNumbers(a, b):
  # Write your code here
  `;

// checks if the user has the correct code
const handlerMultiplyTwoNumbers = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		// Test cases
		const testCases = [
			{ a: 2, b: 3, expected: 6 },
			{ a: -1, b: 5, expected: -5 },
			{ a: 0, b: 0, expected: 0 },
			{ a: -10, b: 10, expected: 0 },
			{ a: -5, b: -5, expected: -10 },
		];

		// Loop through test cases
		testCases.forEach((testCase, index) => {
			const result = fn(testCase.a, testCase.b);
			assert.strictEqual(result, testCase.expected, `Test case ${index + 1} failed`);
		});

		console.log("All test cases passed successfully!");
		return true;
	} catch (error: any) {
		console.log("addTwoNumbers handler function error");
		throw new Error(error);
	}
};

export const multiplyTwoNumbers: Problem = {
	id: "add-two-numbers",
	title: "Add Two Numbers",
	problemStatement: `<p class='mt-3'>
  Write a function that takes two numbers <code>a</code> and <code>b</code> and returns their sum.
</p>`,
	examples: [
		{
			id: 1,
			inputText: "a = 2, b = 3",
			outputText: "6",
			explanation: "Because 2 * 3 = 6.",
		},
		{
			id: 2,
			inputText: "a = -1, b = 5",
			outputText: "-5",
			explanation: "Because -1 * 5 = -5.",
		},
		{
			id: 3,
			inputText: "a = 0, b = 0",
			outputText: "0",
		},
	],
	constraints: `<li class='mt-2'>
  <code>-10^9 ≤ a, b ≤ 10^9</code>
</li>`,
	handlerFunction: handlerMultiplyTwoNumbers,
	starterCode: starterCodeMultiplyTwoNumbers,
	order: 2,
	starterFunctionName: "def multiplyTwoNumbers(",
};
