import axios from 'axios';
import s from './Users.module.css';
import userLogo from '../../../assets/images/user.jpg';

const Users = props => {
	if (props.users.length === 0) {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				props.setUsers(response.data.items);
			});
	}

	return (
		<div className={s.usersContainer}>
			{props.users.map(u => <div key={u.id} className={s.userContainer}>
				<div className={s.userControl}>
					<img src={u.photos.small || userLogo} alt='Loading...' className={s.userPhoto} />
					<button className='btn' onClick={() => { props.toggleFriendship(u.id) }}>
						{u.followed ? 'Unfollow' : 'Follow'}
					</button>
				</div>
				<div className={s.userContent}>
					<div>
						<div className={s.userFullname}>{u.name}</div>
						<div className={s.userStatus}>{u.status}</div>
					</div>
					<div className={s.userLocation}>
						<div className={s.userCity}>{'u.location.city'}</div>
						<div className={s.userCountry}>{'u.location.country'}</div>
					</div>
				</div>
			</div>)}
		</div>
	)
};

export default Users;