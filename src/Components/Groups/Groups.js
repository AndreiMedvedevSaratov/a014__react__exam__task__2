import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const Group = (item) => {
	const localItem = item.item;

	const localState = useSelector((state) => state.myStore);
	const groupUsersIds = useSelector((state) => state.myStore.groups[item.id].groupUsers);

	return useMemo(() => (
		<>
			<div
				id={localItem.id}
			>
				{localItem.groupName}
			</div>
			{groupUsersIds.map(item =>
				<div key={item}>
					{localState.users[item].name}
					<button className='button'
						id={item}
						// onClick={() => handleRemove(localState.usersIds[item])}
					>
						Remove
					</button>
				</div>
			)}
		</>
	), [localItem.id, localItem.groupName, groupUsersIds, localState.users]);
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