import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.dialogItems}>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/1" className={s.active}>Maks</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/2">Aleksey</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/3">Kirill</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/4">Artem</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/5">Sergey</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/6">Vlad</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/7">Andrew</NavLink>
				</div>
				<div className={s.dialogItem}>
					<NavLink to="/dialogs/8">Nikita</NavLink>
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