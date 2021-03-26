import React from 'react';

const UserDumb = (props) => {
	return (
		<div>
			<span>
				{props.userName}
			</span>
			<button className='button'
				onClick={props.handleDelete}
			>
				Delete
			</button>
		</div>
	)
}

export default UserDumb;