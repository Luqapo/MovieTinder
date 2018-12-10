import React from "react";
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
        userIn: state.root.userLogged
    };
};

export default connect(mapStateToProps)(withStyles(styles)((LoginModal)));