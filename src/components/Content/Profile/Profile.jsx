import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div className={s.wallpaper}></div>
			<div className={s.profile}>
				<div className={s.ava}>
					avatar
				</div>
				<div className={s.profileInfo}>
					<p>First Name: Hulio</p>
					<p>Las Name: Padre</p>
					<p>Age: 32</p>
					<p>About me: Pedro Padre</p>
				</div>
			</div>
			<MyPosts />
		</div>
	);
};

export default Profile;