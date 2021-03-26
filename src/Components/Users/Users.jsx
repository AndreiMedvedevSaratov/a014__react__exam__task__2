import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUsersIds } from '../../Store/users/selectors';
import UserSmart from './UserSmart';

const Users = () => {
	const usersIds = useSelector(getUsersIds);

	const markup = useMemo(() => (
		<>
			{!!usersIds.length && usersIds.map(item => (
				<UserSmart key={item} id={item} />
			))}
		</>
	), [usersIds]);

	return markup;
}

export default Users;