import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { styles } from './LoginFormStyles';
import * as actions from '../../store/actions/auth.js';

class LoginForm extends Component{
    state = {
        password: '',
        password2: '',
        email: '',
        addUser: false,
        login: '',
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });

    }

    handleAddUser = () => {
        this.setState({
            addUser: this.state.addUser ? false : true
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (!this.state.addUser){
        this.props.onAuth(this.state.login, this.state.password);
        } else if(this.state.password === this.state.password2) {
            this.props.addUser(this.state.login, this.state.password, this.state.email);
            this.setState({
                addUser: false
            });
        } else {
            alert('Password don`t mastch!');
        }
    }

    render(){
        const { classes } = this.props;
        const addAcount = [
            <Input key="input1" 
                   name="password2" 
                   onChange={this.handleChange} 
                   type="password" 
                   placeholder="Powtórz hasło"
                   required/>,
            <Input key="input2" 
                   name="email" 
                   onChange={this.handleChange} 
                   type="email" 
                   placeholder="Email"
                   required/>
        ];
        return (
            <div className={classes.paper}>
                <form onSubmit={this.submitHandler} className={classes.formCenter}>
                    <Input name="login" 
                           onChange={this.handleChange} 
                           placeholder="Login"
                           required/>
                    <Input name="password" 
                           onChange={this.handleChange} 
                           type="password" 
                           placeholder="Password"
                           required/>
                    {this.state.addUser ? addAcount : null}
                    <div className={classes.buttonCenter}>
                        <Button type="submit">Wyślij</Button>
                    </div>
                </form>
                {this.state.addUser ? null : 
                    <div className={classes.buttonCenter}>
                        <Button onClick={this.handleAddUser}>Załóż konto</Button>
                    </div>}
                <div className={classes.buttonCenter}>
                    <Button onClick={this.props.showHandle}>Anuluj</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userIn: state.root.userLogged
    };
};

const mapDispatchToProps = dispatch => {
        return {
            onAuth: (login, password) => dispatch ( actions.auth ( login, password )),
            logOff: () => dispatch ( actions.logOff()),
            addUser: (login, password, email) => dispatch ( actions.addUser(login, password, email))
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginForm));                       