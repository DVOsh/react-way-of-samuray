import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	const path = '/dialogs/' + props.id;

	return (<div className={s.dialogItem}>
		<NavLink to={path} className={({ isActive }) => isActive ? s.active : undefined}>{props.name}</NavLink>
	</div>);
};

const MessageItem = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	);
};

const Dialogs = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.dialogItems}>
				<DialogItem id="1" name="Maks" />
				<DialogItem id="2" name="Aleksey" />
				<DialogItem id="3" name="Kirill" />
				<DialogItem id="4" name="Artem" />
				<DialogItem id="5" name="Sergey" />
				<DialogItem id="6" name="Vlad" />
				<DialogItem id="7" name="Andrew" />
				<DialogItem id="8" name="Nikita" />
			</div>
			<div className={s.messages}>
				<MessageItem message="Hello" />
				<MessageItem message="How are you?" />
				<MessageItem message="Bye" />
			</div>
		</div>
	);
};

export default Dialogs;