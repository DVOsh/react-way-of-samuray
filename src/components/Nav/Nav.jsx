import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const NavItem = (props) => {
	return (
		<div className={s.item}>
			<NavLink to={props.path} className={({ isActive }) => isActive ? s.active : undefined}>{props.name}</NavLink>
		</div>
	);
};

const Nav = () => {
	return (
		<nav className={s.nav}>

			<NavItem path='/profile' name="Profile" />
			<NavItem path='/dialogs' name="Messages" />
			<NavItem path='/news' name="News" />
			<NavItem path='/music' name="Music" />
			<NavItem path='/settings' name="Settings" />

		</nav>
	);
};

export default Nav;