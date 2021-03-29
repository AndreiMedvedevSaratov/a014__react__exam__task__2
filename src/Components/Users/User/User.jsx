import React, { useMemo, useCallback } from 'react';
import { deleteUserFromUsers } from '../../../Store/users/actions';
import { deleteUserFromGroupUsersArray } from '../../../Store/groups/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../Store/users/selectors';

const UserSmart = (props) => {
	const dispatch = useDispatch();

	const users = useSelector(getUsers);

	const handleDelete = useCallback((id) => {
		dispatch(deleteUserFromGroupUsersArray(id));
		dispatch(deleteUserFromUsers(id));
	}, [dispatch]);

	const markup = useMemo(() => (
		<div>
			<span>
				{users[props.id].name}
			</span>
			<button className='button'
				onClick={() => handleDelete(props.id)}
			>
				Delete
			</button>
		</div>
	), [handleDelete, props.id, users]);
	return markup;
}

export default UserSmart;