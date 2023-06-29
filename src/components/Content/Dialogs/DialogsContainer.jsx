import React from 'react';
import { sendMessageActionCreator, updateMessageInputActionCreator } from '../../../redux/dialogs-reduser';
import Dialogs from './Dialogs';
import StoreContext from '../../../StoreContext';

const DialogsContainer = () => {
	return <StoreContext.Consumer>
		{
			store => {
				let data = store.getState().dialogsData;

				const onSend = () => {
					const action = sendMessageActionCreator();
					store.dispatch(action);
				}

				const onChangeMessageInput = text => {
					const action = updateMessageInputActionCreator(text);
					store.dispatch(action);
				}

				return <Dialogs onSend={onSend} onChangeMessageInput={onChangeMessageInput} data={data} />
			}
		}
	</StoreContext.Consumer>

};

export default DialogsContainer;