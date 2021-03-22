import { usersActionTypes } from "./ActionTypes";

export const addUserInGroup = ({ userId, groupId }) => ({
	type: usersActionTypes.addUserInGroup,
	payload: {
		id: userId,
		groupId: groupId,
	},
});

export const removeUserFromGroup = ({ userId, groupId }) => ({
	type: usersActionTypes.removeUserFromGroup,
	payload: {
		id: userId,
		groupId: groupId,
	},
});

export const deleteUserFromUsers = ({ userId }) => ({
	type: usersActionTypes.deleteUserFromUsers,
	payload: {
		id: userId,
	},
});