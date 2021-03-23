import React, { useMemo, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserInGroup } from './../../Store/Users/Actions';

const Selector = () => {
	const localState = useSelector((state) => state.myStore);
	const dispatch = useDispatch();

	const [selectedUserId, setSelectedUserId] = useState(localState.users[localState.usersIds[0]].id);
	const [selectedGroupId, setSelectedGroupId] = useState(localState.groups[localState.groupsIds[0]].id);

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

			<button className='button'
				onClick={() => handleAdd()}
			>Add
			</button>
		</>
	), [localState, handleAdd, selectedUserId, selectedGroupId]);

	return markup;
}

export default Selector;