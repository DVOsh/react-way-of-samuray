import { connect } from "react-redux";
import { setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFriendshipAC } from "../../../redux/users-reducer";
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
			setCurrentPage={this.setCurrentPage}
			toggleFriendship={this.props.toggleFriendship}
		/>;
	}
}


let mapStateToProps = state => {
	return {
		users: state.usersData.usersData,
		pageSize: state.usersData.pageSize,
		currentPage: state.usersData.currentPage,
		totalUsersCount: state.usersData.totalUsersCount,
	};
};

let mapDispatchToProps = dispatch => {
	return {
		toggleFriendship: id => {
			dispatch(toggleFriendshipAC(id));
		},
		setUsers: users => {
			dispatch(setUsersAC(users));
		},
		setCurrentPage: currentPage => {
			dispatch(setCurrentPageAC(currentPage));
		},
		setTotalUsersCount: totalUsersCount => {
			dispatch(setTotalUsersCountAC(totalUsersCount));
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;