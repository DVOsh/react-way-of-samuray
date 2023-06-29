import CreatePostContainer from './CreatePost/CreatePostContainer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
	const postsElements = props.data.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);
	return (
		<div className={s.myPosts}>
			<CreatePostContainer />
			<div className={s.postsContainer}>
				{postsElements}
			</div>
		</div>
	);
};

export default MyPosts;