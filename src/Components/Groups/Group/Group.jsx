import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUserFromGroup } from '../../../Store/groups/actions';
import { getGroupUsersIds, getGroupName } from '../../../Store/groups/selectors';
import { getUsers } from '../../../Store/users/selectors';

const GroupSmart = (props) => {
	const groupId = props.id;
	const dispatch = useDispatch();

	const groupUsersIds = useSelector(state => getGroupUsersIds(state, groupId));
	const groupName = useSelector(state => getGroupName(state, groupId));
	const users = useSelector(getUsers);

	const handleRemove = useCallback((ids) => {
		dispatch(removeUserFromGroup(ids));
	}, [dispatch]);

	return useMemo(() => (
		<>
			<h4>
				{groupName}
			</h4>
			{!!groupUsersIds.length && groupUsersIds.map(item =>
				<div key={item}>
					{users[item].name}
					<button className='button'
						onClick={() => handleRemove({ userId: users[item].id, groupId: groupId })}
					>
						Remove
						</button>
				</div>
			)}
		</>
	), [groupId, groupName, groupUsersIds, users, handleRemove]);
}

export default GroupSmart;