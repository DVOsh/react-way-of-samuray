import { connect } from 'react-redux';
import Nav from './Nav';

let mapStateToProps = state => ({ data: state.sideBarData.friendsSideBar });

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;