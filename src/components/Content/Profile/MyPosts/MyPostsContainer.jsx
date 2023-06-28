import MyPosts from './MyPosts';

const MyPostsContainer = props => {
	let data = props.store.getState().profileData.postsData;
	return (<MyPosts data={data} store={props.store} />);
};

export default MyPostsContainer;