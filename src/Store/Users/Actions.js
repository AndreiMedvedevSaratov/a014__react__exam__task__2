import { usersActionTypes } from "./ActionTypes";

export const addUserInGroup = (ids) => ({
	type: usersActionTypes.addUserInGroup,
	payload: ids,
});

export const removeUserFromGroup = (ids) => {
	return {
		type: usersActionTypes.removeUserFromGroup,
		payload: ids,
	}
};

export const deleteUserFromUsers = (userId) => {
	return {
		type: usersActionTypes.deleteUserFromUsers,
		payload: {
			userId: userId,
		},
	};
};