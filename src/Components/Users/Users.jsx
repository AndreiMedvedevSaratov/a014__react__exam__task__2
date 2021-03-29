import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUsersIds } from '../../Store/users/selectors';
import User from './User/User';

const Users = () => {
	const usersIds = useSelector(getUsersIds);

	const markup = useMemo(() => (
		<>
			{!!usersIds.length && usersIds.map(item => (
				<User key={item} id={item} />
			))}
		</>
	), [usersIds]);

	return markup;
}

export default Users;