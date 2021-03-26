import { groupsActionTypes } from "./actionTypes";

export const addUserInGroup = (ids) => ({
	type: groupsActionTypes.addUserInGroup,
	payload: ids,
});

export const removeUserFromGroup = (ids) => {
	return {
		type: groupsActionTypes.removeUserFromGroup,
		payload: ids,
	}
};

export const deleteUserFromGroupUsersArray = (id) => ({
	type: groupsActionTypes.deleteUserFromGroupUsersArray,
	payload: id,
});