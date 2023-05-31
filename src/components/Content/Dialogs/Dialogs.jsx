import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const dialogsData = [
	{ id: 1, name: "Maks" },
	{ id: 2, name: "Aleksey" },
	{ id: 3, name: "Kirill" },
	{ id: 4, name: "Artem" },
	{ id: 5, name: "Sergey" },
	{ id: 6, name: "Vlad" },
	{ id: 7, name: "Andrew" },
	{ id: 8, name: "Nikita" },
];

const messagesData = [
	{ id: 1, message: "Hello" },
	{ id: 2, message: "How are you?" },
	{ id: 3, message: "Bye" },
]


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
				<DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
				<DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
			</div>
			<div className={s.messages}>
				<MessageItem id={messagesData[0].id} message={messagesData[0].message} />
				<MessageItem id={messagesData[1].id} message={messagesData[1].message} />
			</div>
		</div>
	);
};

export default Dialogs;