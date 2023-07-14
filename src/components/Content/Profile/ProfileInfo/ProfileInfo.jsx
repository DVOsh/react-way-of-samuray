import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = props => {
	if (!props.profile)
		return <Preloader />


	let contacts = Object.entries(props.profile.contacts).filter(c => c[1] && c);

	return (
		<div className={s.profile}>
			<div className={s.ava}>
				<img src={props.profile.photos.large} alt="Avatar" />
			</div>
			<div className={s.profileInfo}>
				<p className={s.userName}>{props.profile.fullName}</p>
				<i className={s.userStatus}>{props.profile.aboutMe}</i>
				<div className={s.contacts}>
					Contacts:
					<ul className={s.contactsList}>{contacts.map((c, i) => <li key={i}>{`${c[0]}: ${c[1]}`}</li>)}</ul>
				</div>
				<div className={s.job}>
					Ищу работу: {props.profile.lookingForAJob ? <span>&#9989;</span> : <span>&#10062;</span>}
					<p>{props.profile.lookingForAJobDescription}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;