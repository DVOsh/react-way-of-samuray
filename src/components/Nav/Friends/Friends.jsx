import FriendItem from './FriendItem/FriendItem';
import s from './Friends.module.css';

const Friends = props => {
	let friendsElements = props.data.map(f => <FriendItem key={f.id} data={f} />);
	return (
		<div className={s.friends}>
			<span>Friends</span>
			<div className={s.friendsItems}>
				{friendsElements}
			</div>
		</div>
	);
};

export default Friends;