import { createSelector } from 'reselect';

export const getUsersIds = (state) => state.users.usersIds;

export const getUsers = (state) => state.users.users;

export const getUsersNamesReselected = createSelector(
	getUsers,
	getUsersIds,
	(users, usersIds) => {
		let usersNames = {};

		for (let i = 0; i < usersIds.length; i++) {
			usersNames = {
				...usersNames,
				[usersIds[i]]: {
					userName: users[usersIds[i]].name,
				}
			}
		}

		return usersNames;
	}
);

