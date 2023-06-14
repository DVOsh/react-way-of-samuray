import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<div className={s.wallpaper}></div>
			<ProfileInfo />
			<MyPosts store={props.store} />
		</div>
	);
};

export default Profile;