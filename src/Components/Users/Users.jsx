import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getMyStore } from './../../Store/Users/Selectors';
import UserSmart from './UserSmart';

const Users = () => {
	const localState = useSelector(getMyStore);

	const markup = useMemo(() => (
		<>
			{!!localState.usersIds.length && localState.usersIds.map(item => (
				<UserSmart key={item} id={item} />
			))}
		</>
	), [localState]);

	return markup;
}

export default Users;