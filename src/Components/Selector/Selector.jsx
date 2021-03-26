import React, { useMemo, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserInGroup } from '../../Store/groups/actions';
import { getUsers, getUsersIds } from '../../Store/users/selectors';
import { getGroupsIds, getGroups } from '../../Store/groups/selectors';

const Selector = () => {
	const users = useSelector(getUsers);
	const usersIds = useSelector(getUsersIds);
	const groups = useSelector(getGroups);
	const groupsIds = useSelector(getGroupsIds);

	const dispatch = useDispatch();

	let tempSelectedUserId;
	let tempSelectedGroupId;
	tempSelectedUserId = (usersIds.length === 0) ? '' : users[usersIds[0]].id;
	tempSelectedGroupId = (groupsIds.length === 0) ? '' : groups[groupsIds[0]].id;

	const [selectedUserId, setSelectedUserId] = useState(tempSelectedUserId);
	const [selectedGroupId, setSelectedGroupId] = useState(tempSelectedGroupId);

	const handleAdd = useCallback(() => {
		dispatch(addUserInGroup({ userId: selectedUserId, groupId: selectedGroupId }));
	}, [selectedUserId, selectedGroupId, dispatch]);

	const markup = useMemo(() => (
		<>
			<span>User</span>
			<select
				className="select"
				name="users"
				value={selectedUserId}
				onChange={(e) => setSelectedUserId(e.target.value)}>
				{!!usersIds.length && usersIds.map(item =>
					<option
						key={item}
						value={users[item].id}>
						{users[item].name}
					</option>
				)}
			</select>

			<span>in Group</span>
			<select
				className="select"
				name="groups"
				value={selectedGroupId}
				onChange={(e) => setSelectedGroupId(e.target.value)}>
				{!!groupsIds.length && groupsIds.map(item =>
					<option
						key={item}
						value={groups[item].id}>
						{groups[item].groupName}
					</option>
				)}
			</select>

			<button
				className='button'
				onClick={() => handleAdd()}
				disabled={usersIds.length === 0}
			>Add
			</button>
		</>
	), [users, usersIds, groups, groupsIds, handleAdd, selectedUserId, selectedGroupId]);

	return markup;
}

export default Selector;