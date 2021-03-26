export const getMyStore = state => {

	return state.myStore;
}

export const getGroupUsersIds = (state, groupsId) => {

	return state.myStore.groups[groupsId].groupUsers;
}

export const getUsersIds = (state) => {

	return state.myStore.usersIds;
}

export const getUsers = (state) => {

	return state.myStore.users;
}