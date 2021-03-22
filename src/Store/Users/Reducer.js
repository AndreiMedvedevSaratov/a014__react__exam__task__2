import { usersActionTypes } from "./ActionTypes";

const initialState = {
	users: {
		'id0': { name: 'Petr', id: 'id0' },
		'id1': { name: 'Ivan', id: 'id1' },
		'id2': { name: 'Vasya', id: 'id2' },
	},
	usersIds: ['id0', 'id1', 'id2'],
	groups: {
		'id10': {
			groupName: 'Admins',
			groupUsers: ['id0', 'id1', 'id2'],
			id: 'id10',
		},
		'id11': {
			groupName: 'Customers',
			groupUsers: ['id0', 'id2'],
			id: 'id11',
		},
	},
	groupsIds: ['id10', 'id11'],
}

const reducerMapping = {
	[usersActionTypes.addUserInGroup]: (state, { userId, groupId }) => {

		return {
			...state,
			groups: {
				...state.groups,
				[groupId]: {
					...state.groups[groupId],
					groupUsers: [...state.groups[groupId].groupUsers, userId],
				}
			}
		}
	},

	[usersActionTypes.removeUserFromGroup]: (state, { userId, groupId }) => {
		const tempGroupUsers = [...state.groups[groupId].groupUsers];
		let newGroupUsers = tempGroupUsers.filter(item => item !== userId);

		return {
			...state,
			groups: {
				...state.groups,
				[groupId]: {
					...state.groups[groupId],
					groupUsers: newGroupUsers,
				}
			}
		};
	},

	[usersActionTypes.deleteUserFromUsers]: (state, { userId }) => {
		const newUsers = { ...state.users };
		delete newUsers[userId];

		let tempGroups = { ...state.groups };
		for (let i = 0; i < state.groupsIds.length; i++) {
			let tempGroupUsers = [...state.groups[state.groupsIds[i]].groupUsers];
			let newGroupUsers = tempGroupUsers.filter(item => item !== userId);

			tempGroups = {
				...tempGroups,
				[state.groupsIds[i]]: {
					groupName: state.groups[state.groupsIds[i]].groupName,
					groupUsers: [...newGroupUsers],
					id: state.groupsIds[i],
				}
			}
		}

		return {
			...state,
			users: newUsers,
			usersIds: Object.keys(newUsers),
			groups: tempGroups,
		};
	},
}

export const myStore = (state = initialState, action) => reducerMapping[action.type] ? reducerMapping[action.type](state, action.payload) : state;