import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.dialogItems}>
				<div className={`${s.dialogItem} ${s.active}`}>
					<NavLink to="/dialogs/1">Maks</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/1">Aleksey</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/1">Kirill</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/1">Artem</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/1">Sergey</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/1">Vlad</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/1">Andrew</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/1">Nikita</NavLink>
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hello</div>
				<div className={s.message}>How are you?</div>
				<div className={s.message}>Bye</div>
			</div>
		</div>
	);
};

export default Dialogs;