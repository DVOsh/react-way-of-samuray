import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';

const Dialogs = (props) => {
	return (
		<div className={s.wrapper}>
			<div className={s.dialogItems}>
				{props.data.dialogsMembers.map(d => <DialogItem key={d.id} dialogData={d} />)}
			</div>
			<div className={s.messages}>
				{props.data.messagesData.map(m => <MessageItem key={m.id} messageData={m} />)}
			</div>
		</div>
	);
};

export default Dialogs;