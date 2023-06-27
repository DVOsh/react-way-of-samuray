const UPDATE_MESSAGE_INPUT = 'UPDATE-MESSAGE-INPUT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

export const updateMessageInputActionCreator = text =>
	({ type: UPDATE_MESSAGE_INPUT, newMessageText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_MESSAGE_INPUT:
			state.newMessageText = action.newMessageText;
			return state;
		case SEND_MESSAGE:
			if (!state.newMessageText) return state;

			let newMessage = {
				id: state.messagesData.length + 1,
				message: state.newMessageText,
				fromMe: true,
			};

			state.messagesData.push(newMessage);
			state.newMessageText = '';
			return state;
		default: return state;
	}
};

export default dialogsReducer;