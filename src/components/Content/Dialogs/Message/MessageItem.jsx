import s from './MessageItem.module.css';

const MessageItem = (props) => {
	let messageItemClassName = s.messageItem;
	if (props.messageData.from === 'Me')
		messageItemClassName += ` ${s.me}`;
	return (
		<div className={messageItemClassName}>
			<div className={s.messageUser}>
				<img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/5e227329363657.55ef8df90a1ca.png" alt="" />
			</div>
			<div className={s.message}>{props.messageData.message}</div>
		</div>
	);
};

export default MessageItem;