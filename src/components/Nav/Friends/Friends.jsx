import FriendItem from './FriendItem/FriendItem';
import s from './Friends.module.css';

const Friends = (props) => {
	return (
		<div className={s.friends}>
			<span>Friends</span>
			<div className={s.friendsItems}>
				{props.state.map(f => <FriendItem key={f.id} data={f} />)}
			</div>
		</div>
	);
};

export default Friends;