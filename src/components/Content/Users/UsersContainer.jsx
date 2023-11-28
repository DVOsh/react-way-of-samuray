import { connect } from "react-redux";
import { setCurrentPage, setTotalUsersCount, setUsers, toggleFriendship, toggleIsFetching } from "../../../redux/users-reducer";
import React from 'react';
import Users from './Users';
import Preloader from "../../common/Preloader/Preloader";
import { usersAPI } from "../../../api/api";

class UsersAPIComponent extends React.Component {
	componentDidMount = () => {
		this.getUsers(this.props.currentPage, this.props.pageSize);
	}

	getUsers = (currentPage, pageSize) => {
		this.props.toggleIsFetching(true);
		usersAPI.getUsersRequest(currentPage, pageSize).then(data => {
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
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
				<Preloader /> :
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

const UsersContainer = connect(mapStateToProps, {
	setCurrentPage, setTotalUsersCount, setUsers, toggleFriendship, toggleIsFetching
})(UsersAPIComponent);

export default UsersContainer;