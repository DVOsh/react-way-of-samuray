let store = {
	_subscriber() {
		console.log('no subscribers (observers)');
	},

	subscribe(observer) {
		this._subscriber = observer;
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

	getState() {
		return this._state;
	},

	getPostText() {
		return this._state.profileData._postText;
	},

	updatePostInput(newPostText) {
		this._state.profileData._postText = newPostText;
		this._subscriber(this._state);
	},

	addPost() {
		const profileData = this._state.profileData;
		let newPost = {
			id: profileData.postsData.length + 1,
			message: profileData._postText,
			likesCount: 0,
		};

		profileData.postsData.push(newPost);
		profileData._postText = '';
		this._subscriber(this._state);
	},

	getMessageText() {
		return this._state.dialogsData._messageText;
	},

	updateMessageInput(newMessageText) {
		this._state.dialogsData._messageText = newMessageText;
		this._subscriber(this._state);
	},

	sendMessage() {
		const dialogsData = this._state.dialogsData;
		let newMessage = {
			id: dialogsData.messagesData.length + 1,
			message: dialogsData._messageText,
			fromMe: true,
		};

		dialogsData.messagesData.push(newMessage);
		dialogsData._messageText = '';
		this._subscriber(this._state);
	},
};

window.store = store;

export default store;