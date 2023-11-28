import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
	componentDidMount() {
		authAPI.isAuthRequest().then(data => {
			let { id, login, email } = data.data;
			this.props.setAuthUserData(id, login, email);
		});
	}

	render() {
		return <Header {...this.props} />
	}
};

const mapStateToProps = state => ({
	isAuth: state.authData.isAuth,
	login: state.authData.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);