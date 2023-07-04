import s from './Users.module.css';

const Users = props => {
	return (
		<div className={s.usersContainer}>
			{props.users.map(u => <div key={u.id} className={s.userContainer}>
				<div className={s.userControl}>
					<img src={u.photoUrl} alt='Loading...' className={s.userPhoto} />
					<button className='btn' onClick={() => { props.toggleFriendship(u.id) }}>
						{u.isFriend ? 'Unfollow' : 'Follow'}
					</button>
				</div>
				<div className={s.userContent}>
					<div>
						<div className={s.userFullname}>{u.fullName}</div>
						<div className={s.userStatus}>{u.status}</div>
					</div>
					<div className={s.userLocation}>
						<div className={s.userCity}>{u.location.city}</div>
						<div className={s.userCountry}>{u.location.country}</div>
					</div>
				</div>
			</div>)}
		</div>
	)
};

export default Users;