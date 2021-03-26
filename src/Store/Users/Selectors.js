export const getMyStore = state => state.myStore;

export const getGroupUsersIds = (state, groupId) => state.myStore.groups[groupId].groupUsers;

export const getUsersIds = (state) => state.myStore.usersIds;

export const getUsers = (state) => state.myStore.users;

export const getGroupsIds = (state) => state.myStore.groupsIds;

export const getGroups = (state) => state.myStore.groups;

export const getGroupName = (state, groupId) => state.myStore.groups[groupId].groupName;