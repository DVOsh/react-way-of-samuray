import { NavLink } from "react-router-dom";
import s from './NavItem.module.css';

const NavItem = (props) => {
	return (
		<div className={props.name === "Settings" ? `${s.item} ${s.set}` : s.item}>
			<NavLink to={props.path} className={({ isActive }) => isActive ? s.active : undefined}>{props.name}</NavLink>
		</div>
	);
};

export default NavItem;