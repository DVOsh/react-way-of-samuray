const UPDATE_MESSAGE_INPUT = 'UPDATE-MESSAGE-INPUT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const updateMessageInputActionCreator = text =>
	({ type: UPDATE_MESSAGE_INPUT, newMessageText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

const dialogsReducer = (state, action) => {
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