// import { createSelector } from 'reselect';

export const getGroupUsersIds = (state, groupId) => state.groups.groups[groupId].groupUsers;

export const getGroupsIds = (state) => state.groups.groupsIds;

export const getGroups = (state) => state.groups.groups;

export const getGroupName = (state, groupId) => state.groups.groups[groupId].groupName;