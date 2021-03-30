import { createSelectorCreator, defaultMemoize } from 'reselect';

export const getGroupUsersIds = (state, groupId) => state.groups.groups[groupId].groupUsers;

export const getGroupsIds = (state) => state.groups.groupsIds;

export const getGroupName = (state, groupId) => state.groups.groups[groupId].groupName;

export const getGroups = (state) => state.groups.groups;

const isEqualNames = (a, b) => {
	for (let key in a) {
		if (a[key].groupName !== b[key].groupName) return false;
	}
	return true;
}

const createDeepEqualSelector = createSelectorCreator(
	defaultMemoize,
	isEqualNames,
)

export const getGroupsNamesReselected = createDeepEqualSelector(
	getGroups,
	getGroupsIds,
	(groups, groupsIds) => {
		return groupsIds.reduce(function (result, item) {
			return {
				...result,
				[item]: { groupName: groups[item].groupName },
			}
		}, {});
	}
);