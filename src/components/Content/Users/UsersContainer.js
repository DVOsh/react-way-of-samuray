import { connect } from "react-redux";
import { setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFriendshipAC } from "../../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";

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