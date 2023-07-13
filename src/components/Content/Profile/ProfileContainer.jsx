import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				// this.props.setUserPage(response.data.totalCount);
			});
	}

	render() {
		return <Profile {...this.props} />
	}
};

export default connect()(ProfileContainer);