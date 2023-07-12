import { connect } from "react-redux";
import { setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFriendshipAC, toggleIsFetchingAC } from "../../../redux/users-reducer";
import axios from 'axios';
import React from 'react';
import Users from './Users';
import preloader from '../../../assets/images/preloader.png';

class UsersAPIComponent extends React.Component {
	componentDidMount = () => {
		this.getUsers(this.props.currentPage, this.props.pageSize);
	}

	getUsers = (currentPage, pageSize) => {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
				this.props.toggleIsFetching(false);
			});
	}

	setCurrentPage = pageNumber => {
		this.props.setCurrentPage(pageNumber);
		this.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			{this.props.isFetching ?
				<div>
					<img src={preloader} />
				</div> :
				<Users users={this.props.users}
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					setCurrentPage={this.setCurrentPage}
					toggleFriendship={this.props.toggleFriendship}
				/>}
		</>;
	}
}


let mapStateToProps = state => {
	return {
		users: state.usersData.usersData,
		pageSize: state.usersData.pageSize,
		currentPage: state.usersData.currentPage,
		totalUsersCount: state.usersData.totalUsersCount,
		isFetching: state.usersData.isFetching,
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
		},
		toggleIsFetching: isFetching => {
			dispatch(toggleIsFetchingAC(isFetching));
		},
	};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;