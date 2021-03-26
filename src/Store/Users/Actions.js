import { usersActionTypes } from "./actionTypes";

export const deleteUserFromUsers = (userId) => {
	return {
		type: usersActionTypes.deleteUserFromUsers,
		payload: {
			userId: userId,
		},
	};
};