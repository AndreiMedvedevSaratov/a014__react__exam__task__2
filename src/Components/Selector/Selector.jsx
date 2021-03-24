import React, { useMemo, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserInGroup } from '../../Store/Users/Actions';
import { getMyStore } from './../../Store/Users/Selectors';

const Selector = () => {
	const localState = useSelector(getMyStore);
	const dispatch = useDispatch();

	let tempSelectedUserId;
	let tempSelectedGroupId;
	tempSelectedUserId = (localState.usersIds.length === 0) ? '' : localState.users[localState.usersIds[0]].id;
	tempSelectedGroupId = (localState.groupsIds.length === 0) ? '' : localState.groups[localState.groupsIds[0]].id;

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
				{!!localState.usersIds.length && localState.usersIds.map(item =>
					<option
						key={item}
						value={localState.users[item].id}>
						{localState.users[item].name}
					</option>
				)}
			</select>

			<span>in Group</span>
			<select
				className="select"
				name="groups"
				value={selectedGroupId}
				onChange={(e) => setSelectedGroupId(e.target.value)}>
				{!!localState.groupsIds.length && localState.groupsIds.map(item =>
					<option
						key={item}
						value={localState.groups[item].id}>
						{localState.groups[item].groupName}
					</option>
				)}
			</select>

			<button
				className='button'
				onClick={() => handleAdd()}
				disabled={localState.usersIds.length === 0}
			>Add
			</button>
		</>
	), [localState, handleAdd, selectedUserId, selectedGroupId]);

	return markup;
}

export default Selector;