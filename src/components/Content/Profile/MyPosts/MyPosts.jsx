import CreatePost from './CreatePost/CreatePost';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	return (
		<div className={s.myPosts}>
			<CreatePost addPost={props.addPost} />
			<div className={s.posts}>
				{props.data.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)}
			</div>
		</div>
	);
};

export default MyPosts;