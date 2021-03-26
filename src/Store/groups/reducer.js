import { groupsActionTypes } from "./actionTypes";

const initialState = {
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
	[groupsActionTypes.addUserInGroup]: (state, { userId, groupId }) => {
		if (state.groups[groupId].groupUsers.includes(userId)) {
			console.log('User already in group!');
			return state;
		}

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

	[groupsActionTypes.removeUserFromGroup]: (state, { userId, groupId }) => {
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

	[groupsActionTypes.deleteUserFromGroupUsersArray]: (state, userId) => {
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
			groups: tempGroups,
		};
	},
}

export const groups = (state = initialState, action) => reducerMapping[action.type] ? reducerMapping[action.type](state, action.payload) : state;