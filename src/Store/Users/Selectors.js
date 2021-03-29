import { createSelector } from 'reselect';

export const getUsersIds = (state) => state.users.usersIds;

export const getUsers = (state) => state.users.users;

export const getUsersNames = (state) => {
	let usersNames = {};

	for (let i = 0; i < state.users.usersIds.length; i++) {
		usersNames = {
			...usersNames,
			[state.users.usersIds[i]]: {
				userName: state.users.users[state.users.usersIds[i]].name,
			}
		}
	}

	return usersNames;
}

export const getUsersIdsReselected = createSelector(
	getUsersIds,
	(usersIds) => usersIds,
);

export const getUsersNamesReselected = createSelector(
	getUsersNames,
	(usersNames) => usersNames,
);