import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<div className={s.wallpaper}></div>
			<ProfileInfo />
			<MyPosts data={props.data.postsData} />
		</div>
	);
};

export default Profile;