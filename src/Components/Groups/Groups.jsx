import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Group from './Group/Group';
import { getMyStore } from './../../Store/Users/Selectors';

const Groups = () => {
	const localState = useSelector(getMyStore);

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