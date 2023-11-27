import s from './Users.module.css';
import userLogo from '../../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = props => {
	let pages = [];
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	for (let i = 1; i <= 15; i++) {
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
				<NavLink to={`/profile/${u.id}`}>
					<img src={u.photos.small || userLogo} alt='Loading...' className={s.userPhoto} />
				</NavLink>
				<button className='btn' onClick={() => {
					if (u.followed) {
						axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
							withCredentials: true,
							headers: {
								'API-KEY': '07c2ce06-3e87-4ef7-91ce-1867724a4b06',
							}
						})
							.then(response => {
								props.toggleFriendship(u.id);
							});
					} else {
						axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
							withCredentials: true,
							headers: {
								'API-KEY': '07c2ce06-3e87-4ef7-91ce-1867724a4b06',
							}
						})
							.then(response => {
								if (response.data.resultCode === 0) {
									props.toggleFriendship(u.id);
								}
							});
					}
				}}>
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
		</div>)
		}
	</div >);
};

export default Users;