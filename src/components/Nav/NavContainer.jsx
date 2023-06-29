import StoreContext from '../../StoreContext';
import Nav from './Nav';

const NavContainer = () => {
	return <StoreContext.Consumer>
		{
			store => {
				let friendsList = store.getState().sideBarData.friendsSideBar;

				return <Nav data={friendsList} />;
			}
		}
	</StoreContext.Consumer>;
};

export default NavContainer;