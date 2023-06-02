import CreatePost from './CreatePost/CreatePost';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const postsData = [
	{ id: 1, message: 'Hello', likesCount: 12 },
	{ id: 2, message: 'Its my first post', likesCount: 11 },
];

const MyPosts = () => {
	return (
		<div className={s.myPosts}>
			<CreatePost />
			<div className={s.posts}>
				{postsData.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)}
			</div>
		</div>
	);
};

export default MyPosts;