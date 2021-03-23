import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUserFromGroup } from './../../Store/Users/Actions';

const Group = (item) => {
	const localItem = item.item;
	const dispatch = useDispatch();

	const localState = useSelector((state) => state.myStore);
	const groupUsersIds = useSelector((state) => state.myStore.groups[item.id].groupUsers);

	const handleRemove = useCallback((ids) => {
		dispatch(removeUserFromGroup(ids));
	}, [dispatch]);

	return useMemo(() => (
		<>
			<div
				id={localItem.id}
			>
				{localItem.groupName}
			</div>
			{!!groupUsersIds.length && groupUsersIds.map(item =>
				<div key={item}>
					{localState.users[item].name}
					<button className='button'
						id={item}
						onClick={() => handleRemove({ userId: localState.users[item].id, groupId: localItem.id})}
					>
						Remove
					</button>
				</div>
			)}
		</>
	), [localItem.id, localItem.groupName, groupUsersIds, localState.users, handleRemove]);
}

const Groups = () => {
	const localState = useSelector((state) => state.myStore);

	const markup = useMemo(() => (
		<>
			{localState.groupsIds.map(item =>
				<div key={item}>
					<Group
						item={localState.groups[item]}
						id={item}
					/>
				</div>
			)}
		</>
	), [localState]);

	return markup;
}

export default Groups;