import s from './MessageItem.module.css';

const MessageItem = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	);
};

export default MessageItem;