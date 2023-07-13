import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = props => {
	if (!props.profile)
		return <Preloader />

	return (
		<div className={s.profile}>
			<div className={s.ava}>
				{/* avatar */}
				<img src={props.profile.photos.large} alt="Loading" />
			</div>
			<div className={s.profileInfo}>
				<p>Name: {props.profile.fullName}</p>
				<p>About me: {props.profile.aboutMe}</p>
				<div className={s.contacts}>
					Contacts:
					<ul>
						<li>Facebook: {props.profile.contacts.facebook}</li>
						<li>Website: {props.profile.contacts.website}</li>
						<li>VK: {props.profile.contacts.vk}</li>
						<li>Twitter: {props.profile.contacts.twitter}</li>
						<li>Instagram: {props.profile.contacts.instagram}</li>
						<li>YouTube: {props.profile.contacts.youtube}</li>
						<li>GitHub: {props.profile.contacts.github}</li>
						<li>Main Link: {props.profile.contacts.mainLink}</li>
					</ul>
				</div>
				<div className={s.job}>
					<p>{props.profile.lookingForAJob ? 'V' : 'X'}</p>
					<p>{props.profile.lookingForAJobDescription}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;