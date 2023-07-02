import { connect } from "react-redux";
import { setUsersAC, toggleIsFriendAC } from "../../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = state => {
	return {
		users: state.usersData.usersData,
	};
};

let mapDispatchToProps = dispatch => {
	return {
		toggleFriendship: id => {
			dispatch(toggleIsFriendAC(id));
		},
		setUsers: users => {
			dispatch(setUsersAC(users));
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;