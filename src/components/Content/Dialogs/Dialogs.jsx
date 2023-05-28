import s from './Dialogs.module.css';

const Dialogs = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.dialogItems}>
				<div className={`${s.dialogItem} ${s.active}`}>
					Maks
				</div>
				<div className={s.dialogItem}>
					Aleksey
				</div>
				<div className={s.dialogItem}>
					Kirill
				</div>
				<div className={s.dialogItem}>
					Artem
				</div>
				<div className={s.dialogItem}>
					Sergey
				</div>
				<div className={s.dialogItem}>
					Vlad
				</div>
				<div className={s.dialogItem}>
					Andrew
				</div>
				<div className={s.dialogItem}>
					Nikita
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hello</div>
				<div className={s.message}>How are you?</div>
				<div className={s.message}>Bye</div>
			</div>
		</div>
	);
};

export default Dialogs;