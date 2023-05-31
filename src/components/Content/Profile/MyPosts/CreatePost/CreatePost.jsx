import s from './CreatePost.module.css';

const CreatePost = () => {
	return (
		<div className={s.createPost}>
			<textarea className={s.input} placeholder="What's new?" />
			<button
				className={s.btn}
				onMouseDown={e => e.target.style.transform = 'scale(.98)'}
				onMouseUp={e => e.target.style.transform = 'scale(1)'}
			>New post</button>
		</div>
	);
};

export default CreatePost;

