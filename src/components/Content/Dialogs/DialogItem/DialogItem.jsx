import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css';

const DialogItem = (props) => {
	const path = '/dialogs/' + props.dialogData.id;

	return (
		<div className={s.dialogItem}>
			<img className={s.dialogItemAvatar} src="https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-37.jpg" alt="Loading..." />
			<NavLink to={path} className={({ isActive }) => isActive ? s.active : undefined}>{props.dialogData.name}</NavLink>
		</div>
	);
};

export default DialogItem;