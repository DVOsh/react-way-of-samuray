import s from './Nav.module.css';
import NavItem from './NavItem/NavItem';



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