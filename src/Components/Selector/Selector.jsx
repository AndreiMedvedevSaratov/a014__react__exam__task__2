import React, { useMemo, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserInGroup } from '../../Store/groups/actions';
import { getUsersIdsReselected, getUsersNamesReselected } from '../../Store/users/selectors';
import { getGroupsNamesReselected, getGroupsIdsReselected } from '../../Store/groups/selectors';

const Selector = () => {
	const usersIds = useSelector(getUsersIdsReselected);
	const groupsIds = useSelector(getGroupsIdsReselected);
	const groupsNames = useSelector(getGroupsNamesReselected);
	const usersNames = useSelector(getUsersNamesReselected);

	const dispatch = useDispatch();

	let tempSelectedUserId;
	let tempSelectedGroupId;
	tempSelectedUserId = (usersIds.length === 0) ? '' : usersIds[0];
	tempSelectedGroupId = (groupsIds.length === 0) ? '' : groupsIds[0];

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
						value={item}>
						{usersNames[item].userName}
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
						value={item}>
						{groupsNames[item].groupName}
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
	), [usersNames, usersIds, groupsNames, groupsIds, handleAdd, selectedUserId, selectedGroupId]);

	return markup;
}

export default Selector;