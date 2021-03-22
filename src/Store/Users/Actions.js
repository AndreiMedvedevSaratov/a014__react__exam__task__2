import { usersActionTypes } from "./ActionTypes";

export const addUserInGroup = ({ userId, groupId }) => ({
	type: usersActionTypes.addUserInGroup,
	payload: {
		id: userId,
		groupId: groupId,
	},
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