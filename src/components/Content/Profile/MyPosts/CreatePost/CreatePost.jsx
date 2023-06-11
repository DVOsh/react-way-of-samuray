import React from 'react';
import s from './CreatePost.module.css';

const CreatePost = props => {
	const newPostEl = React.createRef();

	const addPost = () => {
		const text = newPostEl.current.value;
		props.addPost(text);
	}

	return (
		<div className={s.createPost}>
			<textarea className="input" placeholder="What's new?" ref={newPostEl} />
			<button className="btn" onClick={addPost}>New post</button>
		</div>
	);
};

export default CreatePost;

