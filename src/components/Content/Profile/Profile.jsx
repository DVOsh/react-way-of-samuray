import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s.content}>
			<div className={s.wallpaper}></div>
			<div>
				avatar + profile
			</div>
			<MyPosts />
		</div>
	);
};

export default Profile;