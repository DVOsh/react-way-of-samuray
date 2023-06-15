import CreatePost from './CreatePost/CreatePost';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const postsElements = props.state.postsData.map(p =>
		<Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);
	return (
		<div className={s.myPosts}>
			<CreatePost dispatch={props.dispatch} />
			<div className={s.postsContainer}>
				{postsElements}
			</div>
		</div>
	);
};

export default MyPosts;