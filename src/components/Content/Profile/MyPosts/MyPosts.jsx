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
				<Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount} />
				<Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount} />
			</div>
		</div>
	);
};

export default MyPosts;