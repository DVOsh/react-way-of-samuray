import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { profileAPI } from '../../../api/api';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;

		if (!userId) {
			userId = 2;
		}

		profileAPI.getProfileRequest(userId).then(data => {
			this.props.setUserProfile(data);
		});
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
};

let mapStateToProps = state => {
	return {
		profile: state.profileData.profile
	};
};

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component {...props} router={{ location, navigate, params }} />
		);
	};

	return ComponentWithRouterProp;
}

let WithRouterContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithRouterContainerComponent);