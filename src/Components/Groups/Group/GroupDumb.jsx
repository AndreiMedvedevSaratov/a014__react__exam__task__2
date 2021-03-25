import React, { useMemo } from 'react';

const GroupDumb = (props) => {
	return (
		<>
			{props.userName}
			<button className='button'
				onClick={() => props.handleRemove({ userId: props.userId, groupId: props.groupId })}
			>
				Remove
			</button>
		</>
	)
}

export default GroupDumb;