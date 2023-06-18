const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';
const ADD_POST = 'ADD-POST';

export const updatePostInputActionCreator = text =>
	({ type: UPDATE_POST_INPUT, newPostText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });

const profileReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_POST_INPUT:
			state.newPostText = action.newPostText;
			return state;
		case ADD_POST:
			if (!state.newPostText) return state;

			let newPost = {
				id: state.postsData.length + 1,
				message: state.newPostText,
				likesCount: 0,
			};

			state.postsData.push(newPost);
			state.newPostText = '';
			return state;
		default: return state;
	}
};

export default profileReducer;