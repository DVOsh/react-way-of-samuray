import React from 'react';
import s from './CreatePost.module.css';

const CreatePost = props => {
	const newPostEl = React.createRef();

	const addPost = () => {
		props.dispatch({ type: 'ADD-POST' });
	}

	const updateInput = () => {
		const text = newPostEl.current.value;
		props.dispatch({ type: 'UPDATE-POST-INPUT', newPostText: text });
	}

	return (
		<div className={s.createPost}>
			<textarea className="input"
				placeholder="What's new?"
				ref={newPostEl}
				value={props.dispatch({ type: 'GET-POST-TEXT' })}
				onChange={updateInput} />
			<button className="btn" onClick={addPost}>New post</button>
		</div>
	);
};

export default CreatePost;

