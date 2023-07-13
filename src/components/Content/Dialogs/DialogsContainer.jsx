import { connect } from 'react-redux';
import { sendMessage, updateMessageInput } from '../../../redux/dialogs-reduser';
import Dialogs from './Dialogs';

let mapStateToProps = state => ({ data: state.dialogsData });

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateMessageInput })(Dialogs);

export default DialogsContainer;