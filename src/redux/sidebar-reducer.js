let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
	return state;
};

export default sidebarReducer;