export const getMyStore = state => {
	
	return state.myStore;
}

export const getGroupUsersIds = (state, groupsId) => {
	
	return state.myStore.groups[groupsId].groupUsers;
}