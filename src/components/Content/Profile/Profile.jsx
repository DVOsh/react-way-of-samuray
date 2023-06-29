import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
	return (
		<div>
			<div className={s.wallpaper}></div>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	);
};

export default Profile;