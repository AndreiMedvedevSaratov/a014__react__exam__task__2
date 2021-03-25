import React from 'react';

const UsersDumb = (props) => {
	return (
		<div>
			<span
				item={props.users[props.item]}
				id={props.item}
			>
				{props.users[props.item].name}
			</span>
			<button className='button'
				id={props.item}
				onClick={() => props.handleDelete(props.idToDelete)}
			>
				Delete
					</button>
		</div>
	)
}

export default UsersDumb;