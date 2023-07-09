import { connect } from "react-redux";
import { setCurrentPageAC, setUsersAC, toggleFriendshipAC } from "../../../redux/users-reducer";
import Users from "./Users";

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
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;