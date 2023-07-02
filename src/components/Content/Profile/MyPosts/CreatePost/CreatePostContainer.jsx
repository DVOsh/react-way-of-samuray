import { connect } from 'react-redux';
import { addPostActionCreator, updatePostInputActionCreator } from '../../../../../redux/profile-reducer';
import CreatePost from './CreatePost';

let mapStateToProps = state => ({ newPostText: state.profileData.newPostText });
let mapDispatchToProps = dispatch => {
	return {
		onAddPost: () => {
			dispatch(addPostActionCreator());
		},
		onUpdateInput: text => {
			dispatch(updatePostInputActionCreator(text));
		},
	};
};

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);

export default CreatePostContainer;