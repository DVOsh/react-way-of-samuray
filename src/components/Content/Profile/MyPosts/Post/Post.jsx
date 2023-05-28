import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://avatars.mds.yandex.net/i?id=8bf150bedc4cc91decc9148932e085c7ac2be94f-5233191-images-thumbs&n=13" alt="Loading..." />
			{props.message}
			<div>
				{props.likesCount}<span className={s.like}>like</span>
			</div>
		</div>
	);
};

export default Post;