import React from 'react';
import { addPostActionCreator, updatePostInputActionCreator } from '../../../../../redux/profile-reducer';
import CreatePost from './CreatePost';
import StoreContext from '../../../../../StoreContext';

const CreatePostContainer = () => {
	return <StoreContext.Consumer>
		{
			store => {
				const onAddPost = () => {
					const action = addPostActionCreator();
					store.dispatch(action);
				}

				const onUpdateInput = text => {
					const action = updatePostInputActionCreator(text);
					store.dispatch(action);
				}

				let newPostText = store.getState().profileData.newPostText;

				return <CreatePost onAddPost={onAddPost} onUpdateInput={onUpdateInput} newPostText={newPostText} />;
			}
		}
	</StoreContext.Consumer>
};

export default CreatePostContainer;