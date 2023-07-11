import s from './Users.module.css';
import userLogo from '../../../assets/images/user.jpg';

const Users = props => {
	let pages = [];
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (<div className={s.usersContainer}>
		<div className={s.pagination}>
			{pages.map(p => {
				return <span key={p}
					className={props.currentPage === p ? s.currentPage : undefined}
					onClick={() => { props.setCurrentPage(p) }}>{p}</span>
			})}
		</div>
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
	</div>);
};

export default Users;