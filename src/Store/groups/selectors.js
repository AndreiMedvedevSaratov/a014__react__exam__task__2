import { createSelector } from 'reselect';

export const getGroupUsersIds = (state, groupId) => state.groups.groups[groupId].groupUsers;

export const getGroupsIds = (state) => state.groups.groupsIds;

export const getGroupName = (state, groupId) => state.groups.groups[groupId].groupName;

export const getGroupsNames = (state) => {
	let groupsNames = {};

	for (let i = 0; i < state.groups.groupsIds.length; i++) {
		groupsNames = {
			...groupsNames,
			[state.groups.groupsIds[i]]: {
				groupName: state.groups.groups[state.groups.groupsIds[i]].groupName,
			}
		}
	}

	return groupsNames;
}

export const getGroupsIdsReselected = createSelector(
	getGroupsIds,
	(groupsIds) => groupsIds,
);

export const getGroupsNamesReselected = createSelector(
	getGroupsNames,
	(groupsNames) => groupsNames,
);