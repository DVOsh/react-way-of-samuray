import axios from 'axios';
import s from './Users.module.css';
import userLogo from '../../../assets/images/user.jpg';
import React from 'react';

class Users extends React.Component {
	componentDidMount() {
		this.getUsers(this.props.currentPage, this.props.pageSize);
	}

	getUsers = (currentPage, pageSize) => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	setCurrentPage = pageNumber => {
		this.props.setCurrentPage(pageNumber);
		this.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		let pages = [];
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return (
			<div className={s.usersContainer}>
				<div className={s.pagination}>
					{pages.map(p => {
						return <span key={p}
							className={this.props.currentPage === p ? s.currentPage : undefined}
							onClick={() => { this.setCurrentPage(p) }}>{p}</span>
					})}
				</div>
				<button className='btn' onClick={this.getUsers}>Get Users</button>
				{this.props.users.map(u => <div key={u.id} className={s.userContainer}>
					<div className={s.userControl}>
						<img src={u.photos.small || userLogo} alt='Loading...' className={s.userPhoto} />
						<button className='btn' onClick={() => { this.props.toggleFriendship(u.id) }}>
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
		);
	}
}

export default Users;