import { fruitsActionTypes } from "./ActionTypes";

export const increment = (fruitId) => ({
	type: fruitsActionTypes.inc,
	payload: {
		id: fruitId,
	},
});