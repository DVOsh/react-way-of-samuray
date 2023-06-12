import CreatePost from './CreatePost/CreatePost';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const postsElements = props.data.postsData.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);
	return (
		<div className={s.myPosts}>
			<CreatePost addPost={props.addPost}
				updatePostInput={props.updatePostInput}
				inputText={props.data.inputText} />
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
};

export default MyPosts;