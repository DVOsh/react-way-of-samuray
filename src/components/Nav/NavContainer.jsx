import Nav from './Nav';

const NavContainer = props => {
	let friendsList = props.store.getState().sideBarData.friendsSideBar;
	return (<Nav data={friendsList} />);
};

export default NavContainer;