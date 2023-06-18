import React from 'react';
import s from './CreatePost.module.css';
import { addPostActionCreator, updatePostInputActionCreator } from '../../../../../redux/profile-reducer';

const CreatePost = props => {
	const newPostEl = React.createRef();

	const addPost = () => {
		const action = addPostActionCreator();
		props.dispatch(action);
	}

	const updateInput = () => {
		const text = newPostEl.current.value;
		const action = updatePostInputActionCreator(text);
		props.dispatch(action);
	}

	return (
		<div className={s.createPost}>
			<textarea className="input"
				placeholder="What's new?"
				ref={newPostEl}
				value={props.state.newPostText}
				onChange={updateInput} />
			<button className="btn" onClick={addPost}>New post</button>
		</div>
	);
};

export default CreatePost;