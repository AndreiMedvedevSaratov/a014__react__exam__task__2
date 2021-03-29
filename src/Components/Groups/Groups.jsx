import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Group from './Group/Group';
import { getGroupsIds } from '../../Store/groups/selectors';

const Groups = () => {
	const groupsIds = useSelector(getGroupsIds);

	const markup = useMemo(() => (
		<>
			{groupsIds.map(item =>
				<div key={item}>
					<Group
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