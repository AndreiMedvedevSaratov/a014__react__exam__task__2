import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserFromUsers } from '../../Store/Users/Actions';
import { getMyStore } from './../../Store/Users/Selectors';

const Users = () => {
	const localState = useSelector(getMyStore);
	const dispatch = useDispatch();

	const handleDelete = useCallback((id) => {
		dispatch(deleteUserFromUsers(id));
	}, [dispatch]);

	const markup = useMemo(() => (
		<>
			{!!localState.usersIds.length && localState.usersIds.map(item => (
				<div key={item}>
					<span
						item={localState.users[item]}
						id={item}
					>
						{localState.users[item].name}
					</span>
					<button className='button'
						id={item}
						onClick={() => handleDelete(localState.users[item].id)}
					>
						Delete
					</button>
				</div>
			))}
		</>
	), [localState, handleDelete]);

	return markup;
}

export default Users;