import React from 'react';

const GroupDumb = (props) => {
	return (
		<>
			{props.userName}
			<button className='button'
				onClick={props.handleRemove}
			>
				Remove
			</button>
		</>
	)
}

export default GroupDumb;