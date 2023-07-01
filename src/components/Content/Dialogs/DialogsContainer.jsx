import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageInputActionCreator } from '../../../redux/dialogs-reduser';
import Dialogs from './Dialogs';

let mapStateToProps = state => ({ data: state.dialogsData });
let mapDispatchToProps = dispatch => {
	return {
		onSend: () => {
			dispatch(sendMessageActionCreator());
		},
		onChangeMessageInput: text => {
			dispatch(updateMessageInputActionCreator(text));
		}
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;