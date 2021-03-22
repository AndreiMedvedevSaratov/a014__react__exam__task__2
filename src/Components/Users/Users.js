import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserFromUsers } from './../../Store/Users/Actions';

const Users = () => {
	const localState = useSelector((state) => state.myStore);
	const dispatch = useDispatch();

	const handleDelete = useCallback((id) => {
		console.log(id);
		dispatch(deleteUserFromUsers(id));
	}, [dispatch]);

	const markup = useMemo(() => (
		<>
			{localState.usersIds.map(item => (
				<div key={item}>
					<span
						item={localState.users[item]}
						id={item}
					>
						{localState.users[item].name}
					</span>
					<button
						id={item}
						onClick={() => handleDelete(localState.usersIds[item])}
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