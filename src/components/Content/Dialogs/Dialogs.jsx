import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import React from 'react';

const Dialogs = (props) => {
	const dialogsItems = props.data.dialogsMembers.map(d => <DialogItem key={d.id} dialogData={d} />);
	const messagesItems = props.data.messagesData.map(m => <MessageItem key={m.id} messageData={m} />);

	let sendMesEl = React.createRef();

	const onSend = () => {
		props.sendMessage();
	}

	const changeMessageInput = () => {
		let text = sendMesEl.current.value;
		props.updateMessageInput(text);
	}

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
						value={props.data.messageText} />
					<button className="btn" onClick={onSend}>Send</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;