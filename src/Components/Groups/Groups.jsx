import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import GroupSmart from './Group/GroupSmart';
import { getGroupsIds } from '../../Store/groups/selectors';

const Groups = () => {
	const groupsIds = useSelector(getGroupsIds);

	const markup = useMemo(() => (
		<>
			{groupsIds.map(item =>
				<div key={item}>
					<GroupSmart
						item={item}
						id={item}
					/>
				</div>
			)}
		</>
	), [groupsIds]);

	return markup;
}

export default Groups;