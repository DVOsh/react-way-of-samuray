import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
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
	);
};

export default ProfileInfo;