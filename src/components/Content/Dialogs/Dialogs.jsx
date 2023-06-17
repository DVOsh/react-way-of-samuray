import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import React from 'react';
import { getMessageTextActionCreator, sendMessageActionCreator, updateMessageInputActionCreator } from '../../../redux/store';

const Dialogs = (props) => {
	const dialogsItems = props.state.dialogsMembers.map(d => <DialogItem key={d.id} dialogData={d} />);
	const messagesItems = props.state.messagesData.map(m => <MessageItem key={m.id} messageData={m} />);

	let sendMesEl = React.createRef();

	const onSend = () => {
		const action = sendMessageActionCreator();
		props.dispatch(action);
	}

	const changeMessageInput = () => {
		const text = sendMesEl.current.value;
		const action = updateMessageInputActionCreator(text);
		props.dispatch(action);
	}

	const getMessageTextAction = getMessageTextActionCreator();

	return (
		<div className={s.wrapper}>
			<div className={s.dialogItems}>
				{dialogsItems}
			</div>
			<div className={s.messagesBox}>
				<div className={s.messages}>
					{messagesItems}
				</div>
				<div className={s.send}> {/*send message*/}
					<textarea className="input"
						placeholder='Enter a message'
						ref={sendMesEl}
						onChange={changeMessageInput}
						value={props.dispatch(getMessageTextAction)} />
					<button className="btn" onClick={onSend}>Send</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;