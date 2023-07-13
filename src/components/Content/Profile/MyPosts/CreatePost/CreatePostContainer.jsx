import { connect } from 'react-redux';
import { addPost, updatePostInput } from '../../../../../redux/profile-reducer';
import CreatePost from './CreatePost';

let mapStateToProps = state => ({ newPostText: state.profileData.newPostText });

const CreatePostContainer = connect(mapStateToProps, { addPost, updatePostInput })(CreatePost);

export default CreatePostContainer;