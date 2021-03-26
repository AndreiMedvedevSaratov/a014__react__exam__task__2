import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import GroupSmart from './Group/GroupSmart';
import { getMyStore } from './../../Store/Users/Selectors';

const Groups = () => {
	const localState = useSelector(getMyStore);

	const markup = useMemo(() => (
		<>
			{localState.groupsIds.map(item =>
				<div key={item}>
					<GroupSmart
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