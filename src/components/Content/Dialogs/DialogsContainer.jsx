import React from 'react';
import { sendMessageActionCreator, updateMessageInputActionCreator } from '../../../redux/dialogs-reduser';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let data = props.store.getState().dialogsData;

	const onSend = () => {
		const action = sendMessageActionCreator();
		props.store.dispatch(action);
	}

	const onChangeMessageInput = text => {
		const action = updateMessageInputActionCreator(text);
		props.store.dispatch(action);
	}

	return (<Dialogs
		onSend={onSend}
		onChangeMessageInput={onChangeMessageInput}
		data={data} />);
};

export default DialogsContainer;