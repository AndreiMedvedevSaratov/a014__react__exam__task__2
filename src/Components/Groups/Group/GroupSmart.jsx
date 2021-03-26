import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUserFromGroup } from '../../../Store/Users/Actions';
import { getMyStore, getGroupUsersIds } from '../../../Store/Users/Selectors';
import GroupDumb from './GroupDumb';

const GroupSmart = (item) => {
	const localItem = item.item;
	const dispatch = useDispatch();

	const localState = useSelector(getMyStore);
	const groupUsersIds = useSelector(state => getGroupUsersIds(state, item.id));

	const handleRemove = useCallback((ids) => {
		dispatch(removeUserFromGroup(ids));
	}, [dispatch]);

	return useMemo(() => (
		<>
			<h4>
				{localItem.groupName}
			</h4>
			{!!groupUsersIds.length && groupUsersIds.map(item =>
				<div key={item}>
					<GroupDumb
						userName={localState.users[item].name}
						userId={localState.users[item].id}
						groupId={localItem.id}
						handleRemove={() => handleRemove({ userId: localState.users[item].id, groupId: localItem.id })}
					/>
				</div>
			)}
		</>
	), [localItem.id, localItem.groupName, groupUsersIds, localState.users, handleRemove]);
}

export default GroupSmart;