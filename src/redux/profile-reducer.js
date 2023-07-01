const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';
const ADD_POST = 'ADD-POST';

let initialState = {
	postsData: [
		{ id: 1, message: 'Hello', likesCount: 12 },
		{ id: 2, message: 'Its my first post', likesCount: 11 },
	],
	newPostText: '',
};

export const updatePostInputActionCreator = text =>
	({ type: UPDATE_POST_INPUT, newPostText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_POST_INPUT: {
			let stateCopy = { ...state };
			stateCopy.newPostText = action.newPostText;
			return stateCopy;
		}
		case ADD_POST: {
			if (!state.newPostText) return state;

			let newPost = {
				id: state.postsData.length + 1,
				message: state.newPostText,
				likesCount: 0,
			};

			let stateCopy = { ...state };
			stateCopy.postsData = [...state.postsData];
			stateCopy.postsData.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		default: return state;
	}
};

export default profileReducer;