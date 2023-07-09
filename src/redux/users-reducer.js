const TOGGLE_FRIENDSHIP = 'TOGGLE-IS-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
	usersData: [],
	pageSize: 5,
	currentPage: 1,
	totalUsersCount: 19,
};

export const toggleFriendshipAC = id => ({ type: TOGGLE_FRIENDSHIP, userId: id });
export const setUsersAC = users => ({ type: SET_USERS, users: users });
export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCountAC = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

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
			}
		default: return state;
	};
};

export default usersReducer;