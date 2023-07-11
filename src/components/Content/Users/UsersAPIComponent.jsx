import axios from 'axios';
import React from 'react';
import Users from './Users';

class UsersAPIComponent extends React.Component {
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
		return <Users users={this.props.users}
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			setCurrentPage={this.props.setCurrentPage}
			toggleFriendship={this.props.toggleFriendship}
		/>;
	}
}

export default UsersAPIComponent;