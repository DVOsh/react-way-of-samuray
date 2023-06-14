import CreatePost from './CreatePost/CreatePost';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const postsElements = props
		.store
		.getState()
		.profileData
		.postsData
		.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);
	return (
		<div className={s.myPosts}>
			<CreatePost store={props.store} />
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
};

export default MyPosts;