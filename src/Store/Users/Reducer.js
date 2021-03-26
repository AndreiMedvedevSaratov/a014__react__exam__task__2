import { usersActionTypes } from "./actionTypes";

const initialState = {
	users: {
		'id0': { name: 'Petr', id: 'id0' },
		'id1': { name: 'Ivan', id: 'id1' },
		'id2': { name: 'Vasya', id: 'id2' },
	},
	usersIds: ['id0', 'id1', 'id2'],
}

const reducerMapping = {
	[usersActionTypes.deleteUserFromUsers]: (state, { userId }) => {
		const newUsers = { ...state.users };
		delete newUsers[userId];

		return {
			...state,
			users: newUsers,
			usersIds: Object.keys(newUsers),
		};
	},
}

export const users = (state = initialState, action) => reducerMapping[action.type] ? reducerMapping[action.type](state, action.payload) : state;