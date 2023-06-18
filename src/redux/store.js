import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
			newMessageText: '',
		},
		profileData: {
			postsData: [
				{ id: 1, message: 'Hello', likesCount: 12 },
				{ id: 2, message: 'Its my first post', likesCount: 11 },
			],
			newPostText: '',
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
		this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
		this._state.profileData = profileReducer(this._state.profileData, action);
		this._state.sideBarData = sidebarReducer(this._state.sideBarData, action);
		this._callSubscriber(this.getState());
	},
};

window.store = store;

export default store;