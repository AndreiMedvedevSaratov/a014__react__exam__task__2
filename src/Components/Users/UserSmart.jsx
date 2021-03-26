import React, { useMemo, useCallback } from 'react';
import { deleteUserFromUsers } from '../../Store/Users/Actions';
import { useSelector, useDispatch } from 'react-redux';
import { getMyStore } from './../../Store/Users/Selectors';
import UserDumb from './UserDumb';

const UserSmart = (props) => {
	const dispatch = useDispatch();

	const localState = useSelector(getMyStore);
	const users = localState.users;

	const handleDelete = useCallback((id) => {
		dispatch(deleteUserFromUsers(id));
	}, [dispatch]);

	const markup = useMemo(() => (
		<UserDumb
			userName={users[props.id].name}
			handleDelete={() => handleDelete(props.id)}
		/>
	), [handleDelete, props.id, users]);
	return markup;
}

export default UserSmart;