import { connect } from 'react-redux'
import Modal from './modal'
import { closeModal } from '../../../actions/modal/modal_actions'

const msp = state => ({
  errorMessage: state.errors.session.errors,
  modal: state.ui.modal,
});

const mdp = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(Modal)