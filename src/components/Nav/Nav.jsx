import Friends from './Friends/Friends';
import s from './Nav.module.css';
import NavItem from './NavItem/NavItem';



const Nav = (props) => {
	return (
		<nav className={s.nav}>

			<div className={s.links}>
				<NavItem path='/profile' name="Profile" />
				<NavItem path='/dialogs' name="Messages" />
				<NavItem path='/news' name="News" />
				<NavItem path='/music' name="Music" />
				<NavItem path='/settings' name="Settings" />
			</div>

			<Friends state={props.state.friendsSideBar} />

		</nav>
	);
};

export default Nav;