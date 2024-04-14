import { Problem } from "../types/problem";
import { addTwoNumbers } from "./add-two-numbers";
import { jumpGame } from "./jump-game";
import { multiplyTwoNumbers } from "./multiply-two-numbers";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"65f59720b3b1c2ed0ee473b3": twoSum,
	"65f5981cb3b1c2ed0ee473b4": validParentheses,
	"65fe9b5d93694c4ffb2b2128": addTwoNumbers,
	"661b7731e5e2887b0e9e9caa" : multiplyTwoNumbers,
	"two-sum": twoSum,
	"reverse-linked-list": reverseLinkedList,
	"jump-game": jumpGame,
	"search-a-2d-matrix": search2DMatrix,
	"valid-parentheses": validParentheses,
};
