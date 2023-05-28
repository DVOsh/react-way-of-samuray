import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div className={s.wallpaper}></div>
			<div>
				avatar + profile
			</div>
			<MyPosts />
		</div>
	);
};

export default Profile;