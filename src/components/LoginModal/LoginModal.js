import React from "react";
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import * as actions from '../../store/actions/auth';
import { styles } from './LoginModalStyles';
import LoginForm from '../../containers/LoginForm/LoginForm';

const LoginModal = props => {
        const openModal = Boolean(!props.userIn);
        
        return (
                    <Modal
                        aria-labelledby="login-modal-title"
                        aria-describedby="login-modal-description"
                        open={openModal}
                        onClose={props.showHandle}
                    >
                        <LoginForm showHandle={props.showHandle}/>
                    </Modal>
            )
}

const mapStateToProps = state => {
    return {
        userIn: state.userLogged
    };
};

const mapDispatchToProps = dispatch => {
        return {
            onAuth: (login, password) => dispatch ( actions.auth ( login, password )),
            logOff: () => dispatch ( actions.logOff()),
            addUser: (login, password, password2, email) => dispatch ( actions.addUser(login, password, password2, email))
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)((LoginModal)));