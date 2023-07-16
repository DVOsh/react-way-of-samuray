import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = props => {
	return (
		<header className={s.header}>
			<img src="https://allsoft.ru/upload/programs_pictograms/770/77089b4bdd1fd7788b9cc52b6a3d2a73.png" alt="Loading..." />
			<div className={s.loginBox}>
				{props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
			</div>
		</header>
	);
};

export default Header;