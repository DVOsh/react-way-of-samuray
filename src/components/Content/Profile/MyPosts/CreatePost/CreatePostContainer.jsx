import React from 'react';
import { addPostActionCreator, updatePostInputActionCreator } from '../../../../../redux/profile-reducer';
import CreatePost from './CreatePost';

const CreatePostContainer = props => {
	const onAddPost = () => {
		const action = addPostActionCreator();
		props.store.dispatch(action);
	}

	const onUpdateInput = text => {
		const action = updatePostInputActionCreator(text);
		props.store.dispatch(action);
	}

	let newPostText = props.store.getState().profileData.newPostText;

	return (<CreatePost onAddPost={onAddPost} onUpdateInput={onUpdateInput} newPostText={newPostText} />);
};

export default CreatePostContainer;