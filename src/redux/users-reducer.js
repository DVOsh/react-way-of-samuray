const TOGGLE_FRIENDSHIP = 'TOGGLE-IS-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETTCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
	usersData: [],
	pageSize: 5,
	currentPage: 1,
	totalUsersCount: 19,
	isFetching: false,
};

export const toggleFriendship = id => ({ type: TOGGLE_FRIENDSHIP, userId: id });
export const setUsers = users => ({ type: SET_USERS, users: users });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETTCHING, isFetching: isFetching });

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FRIENDSHIP:
			let usersArr = state.usersData.map(u => {
				if (u.id === action.userId) {
					return { ...u, followed: !u.followed }
				}
				return u;
			});
			return {
				...state,
				usersData: usersArr,
			};
		case SET_USERS:
			return {
				...state,
				usersData: action.users,
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			};
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count,
			};
		case TOGGLE_IS_FETTCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};
		default: return state;
	};
};

export default usersReducer;