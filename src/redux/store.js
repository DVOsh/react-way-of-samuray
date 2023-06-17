const GET_POST_TEXT = 'GET-POST-TEXT';
const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';
const ADD_POST = 'ADD-POST';

const GET_MESSAGE_TEXT = 'GET-MESSAGE-TEXT';
const UPDATE_MESSAGE_INPUT = 'UPDATE-MESSAGE-INPUT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
	_callSubscriber() {
		console.log('no subscribers (observers)');
	},
	_state: {
		dialogsData: {
			dialogsMembers: [
				{ id: 1, name: "Maks" },
				{ id: 2, name: "Aleksey" },
				{ id: 3, name: "Kirill" },
				{ id: 4, name: "Artem" },
				{ id: 5, name: "Sergey" },
				{ id: 6, name: "Vlad" },
				{ id: 7, name: "Andrew" },
				{ id: 8, name: "Nikita" },
			],
			messagesData: [
				{ id: 1, message: "Hello", fromMe: true },
				{ id: 2, message: "Hello", fromMe: false },
				{ id: 3, message: "How are you?", fromMe: true },
				{ id: 4, message: "Im fine", fromMe: false },
				{ id: 5, message: "Bye", fromMe: true },
			],
			_messageText: '',
		},
		profileData: {
			postsData: [
				{ id: 1, message: 'Hello', likesCount: 12 },
				{ id: 2, message: 'Its my first post', likesCount: 11 },
			],
			_postText: '',
		},
		sideBarData: {
			friendsSideBar: [
				{
					id: 1,
					name: "Mike",
					photo: "https://e7.pngegg.com/pngimages/261/314/png-clipart-computer-icons-user-mr-perkins-computer-icons-user.png"
				},
				{
					id: 2,
					name: "Lisa",
					photo: "https://e7.pngegg.com/pngimages/261/314/png-clipart-computer-icons-user-mr-perkins-computer-icons-user.png"
				},
				{
					id: 3,
					name: "Ann",
					photo: "https://e7.pngegg.com/pngimages/261/314/png-clipart-computer-icons-user-mr-perkins-computer-icons-user.png"
				},
			],
		},
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},
	getState() {
		return this._state;
	},

	dispatch(action) {
		if (action.type === GET_POST_TEXT) {
			return this._state.profileData._postText;
		}
		if (action.type === UPDATE_POST_INPUT) {
			this._state.profileData._postText = action.newPostText;
			this._callSubscriber(this._state);
		}
		if (action.type === ADD_POST) {
			const profileData = this._state.profileData;
			let newPost = {
				id: profileData.postsData.length + 1,
				message: profileData._postText,
				likesCount: 0,
			};

			profileData.postsData.push(newPost);
			profileData._postText = '';
			this._callSubscriber(this._state);
		}

		if (action.type === GET_MESSAGE_TEXT) {
			return this._state.dialogsData._messageText;
		}
		if (action.type === UPDATE_MESSAGE_INPUT) {
			this._state.dialogsData._messageText = action.newMessageText;
			this._callSubscriber(this._state);
		}
		if (action.type === SEND_MESSAGE) {
			const dialogsData = this._state.dialogsData;
			let newMessage = {
				id: dialogsData.messagesData.length + 1,
				message: dialogsData._messageText,
				fromMe: true,
			};

			dialogsData.messagesData.push(newMessage);
			dialogsData._messageText = '';
			this._callSubscriber(this._state);
		}
	},
};

export const getPostTextActionCreator = () => ({ type: GET_POST_TEXT });
export const updatePostInputActionCreator = text =>
	({ type: UPDATE_POST_INPUT, newPostText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });

export const getMessageTextActionCreator = () => ({ type: GET_MESSAGE_TEXT });
export const updateMessageInputActionCreator = text =>
	({ type: UPDATE_MESSAGE_INPUT, newMessageText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

window.store = store;

export default store;