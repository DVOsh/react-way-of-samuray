const TOGGLE_IS_FRIEND = 'TOGGLE-IS-FRIEND';
const SET_USERS = 'SET-USERS';

let initialState = {
	usersData: [
		{ id: 1, fullName: 'Daniel', status: 'I am a boss', location: { city: 'Luhansk', country: 'Russia', }, isFriend: false, },
		{ id: 2, fullName: 'Roman', status: 'I am a boss too', location: { city: 'Krasny Luch', country: 'LNR', }, isFriend: true, },
		{ id: 3, fullName: 'Vika', status: 'I am a whore', location: { city: 'Kiev', country: 'Ukraine', }, isFriend: false, },
	],
};

export const toggleIsFriendAC = id => ({ type: TOGGLE_IS_FRIEND, userId: id });
export const setUsersAC = users => ({ type: SET_USERS, users: users });

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_IS_FRIEND:
			let usersArr = state.usersData.map(u => {
				if (u.id === action.userId) {
					return { ...u, isFriend: !u.isFriend }
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
				usersData: [...state.usersData, ...action.users],
			}
		default: return state;
	};
};

export default usersReducer;

//console.log(usersReducer(initialState, toggleIsFriendAC(1)));