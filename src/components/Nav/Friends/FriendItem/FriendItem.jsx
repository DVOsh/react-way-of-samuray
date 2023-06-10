import s from './FriendItem.module.css';

const FriendItem = (props) => {
	return (
		<div className={s.friendItem}>
			<img src={props.data.photo} alt="" />
			<span>{props.data.name}</span>
		</div>
	);
};

export default FriendItem;