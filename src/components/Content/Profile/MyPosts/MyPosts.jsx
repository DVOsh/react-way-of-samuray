import CreatePost from './CreatePost/CreatePost';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={s.myPosts}>
			<CreatePost />
			<div className={s.posts}>
				<Post message='Hello' likesCount='15' />
				<Post message="It's my first post" likesCount='30' />
			</div>
		</div>
	);
};

export default MyPosts;