const state = {
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
			{ id: 1, message: "Hello" },
			{ id: 2, message: "How are you?" },
			{ id: 3, message: "Bye" },
		],
	},
	profileData: {
		postsData: [
			{ id: 1, message: 'Hello', likesCount: 12 },
			{ id: 2, message: 'Its my first post', likesCount: 11 },
		]
	},
	sideBarData: {},
};

export default state;