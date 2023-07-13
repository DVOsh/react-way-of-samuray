const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
	postsData: [
		{ id: 1, message: 'Hello', likesCount: 12 },
		{ id: 2, message: 'Its my first post', likesCount: 11 },
	],
	newPostText: '',
	profile: null
};

export const updatePostInput = text =>
	({ type: UPDATE_POST_INPUT, newPostText: text });
export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_POST_INPUT:
			return {
				...state,
				newPostText: action.newPostText,
			};
		case ADD_POST:
			if (!state.newPostText) return state;

			let newPost = {
				id: state.postsData.length + 1,
				message: state.newPostText,
				likesCount: 0,
			};

			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostText: '',
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		default: return state;
	}
};

export default profileReducer;