import { createSelector } from 'reselect';

export const getGroupUsersIds1 = (state, groupId) => state.myStore.groups[groupId].groupUsers;

export const getGroupUsersIds = createSelector(
	getGroupUsersIds1,
	(groupUsersIds) => {
		return groupUsersIds;
	}
);

export const getUsersIds1 = (state) => state.myStore.usersIds;

export const getUsersIds = createSelector(
	getUsersIds1,
	(usersIds) => {
		return usersIds;
	}
);

export const getUsers1 = (state) => state.myStore.users;

export const getUsers = createSelector(
	getUsers1,
	(users) => {
		return users;
	}
);

export const getGroupsIds1 = (state) => state.myStore.groupsIds;

export const getGroupsIds = createSelector(
	getGroupsIds1,
	(groupsIds) => {
		return groupsIds;
	}
);

export const getGroups1 = (state) => state.myStore.groups;

export const getGroups = createSelector(
	getGroups1,
	(groups) => {
		return groups;
	}
);

export const getGroupName1 = (state, groupId) => state.myStore.groups[groupId].groupName;

export const getGroupName = createSelector(
	getGroupName1,
	(groupName) => {
		return groupName;
	}
);