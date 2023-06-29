import StoreContext from '../../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
	return <StoreContext.Consumer>
		{
			store => {
				let data = store.getState().profileData.postsData;

				return <MyPosts data={data} />;
			}
		}
	</StoreContext.Consumer>
};

export default MyPostsContainer;