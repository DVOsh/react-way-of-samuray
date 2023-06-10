import React from 'react';
import s from './CreatePost.module.css';

const CreatePost = () => {
	const newPostEl = React.createRef();

	const addPost = () => {
		const text = newPostEl.current.value;
		alert(text);
	}

	return (
		<div className={s.createPost}>
			<textarea className={s.input} placeholder="What's new?" ref={newPostEl} />
			<button className={s.btn} onClick={addPost}>New post</button>
		</div>
	);
};

export default CreatePost;

