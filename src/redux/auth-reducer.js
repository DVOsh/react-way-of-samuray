const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
};

export const setAuthUserData = (userId, login, email) => ({
	type: SET_USER_PROFILE,
	data: { userId, login, email }
});

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_POST_INPUT:
			return {
				...state,
				...action.data,
			};
		default: return state;
	}
};

export default profileReducer;