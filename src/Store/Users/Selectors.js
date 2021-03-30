import { createSelector } from 'reselect';

export const getUsersIds = (state) => state.users.usersIds;

export const getUsers = (state) => state.users.users;

export const getUsersNamesReselected = createSelector(
	getUsers,
	getUsersIds,
	(users, usersIds) => {
		return usersIds.reduce(function (result, item) {
				return {
					...result,
					[item]: { userName: users[item].name },
				}
			}, {});
	}
);

