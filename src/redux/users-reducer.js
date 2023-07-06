const TOGGLE_FRIENDSHIP = 'TOGGLE-IS-FRIEND';
const SET_USERS = 'SET-USERS';

let initialState = {
	usersData: [],
};

export const toggleFriendshipAC = id => ({ type: TOGGLE_FRIENDSHIP, userId: id });
export const setUsersAC = users => ({ type: SET_USERS, users: users });

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
				usersData: [...action.users],
			}
		default: return state;
	};
};

export default usersReducer;

//console.log(usersReducer(initialState, toggleIsFriendAC(1)));