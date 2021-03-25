import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserFromUsers } from '../../Store/Users/Actions';
import { getMyStore } from './../../Store/Users/Selectors';
import UsersDumb from './UsersDumb';

const Users = () => {
	const localState = useSelector(getMyStore);
	const dispatch = useDispatch();

	const handleDelete = useCallback((id) => {
		dispatch(deleteUserFromUsers(id));
	}, [dispatch]);

	const markup = useMemo(() => (
		<>
			{!!localState.usersIds.length && localState.usersIds.map(item => (
				<UsersDumb
					item={item}
					users={localState.users}
					idToDelete={localState.users[item].id}
					handleDelete={handleDelete}
					key={item}
				/>
			))}
		</>
	), [localState, handleDelete]);

	return markup;
}

export default Users;