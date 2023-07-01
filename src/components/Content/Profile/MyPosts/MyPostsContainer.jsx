import { connect } from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps = state => ({ data: state.profileData.postsData });

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;