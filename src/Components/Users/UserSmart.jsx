import React, { useMemo, useCallback } from 'react';
import { deleteUserFromUsers } from '../../Store/users/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../Store/users/selectors';
import UserDumb from './UserDumb';

const UserSmart = (props) => {
	const dispatch = useDispatch();

	const users = useSelector(getUsers);

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