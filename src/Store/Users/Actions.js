import { usersActionTypes } from "./actionTypes";
import { deleteUserFromGroupUsersArray } from './../groups/actions';

export const deleteUserFromUsers = (userId) => {
	return {
		type: usersActionTypes.deleteUserFromUsers,
		payload: {
			userId: userId,
		},
	};
};

export const deleteUserFromUsersThunk = (userId) => {
	return (dispatch) => {
		dispatch(deleteUserFromGroupUsersArray(userId));
		dispatch(deleteUserFromUsers(userId));
	}
}