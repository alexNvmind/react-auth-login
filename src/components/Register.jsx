import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';


@withRouter
class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        // smh material button ignores type submit
        e.preventDefault();
        const { registerUser, history, setToken } = this.props;
        registerUser(this.state).then(({ data: { token } }) => {
            setToken(token)
            history.push('/user')
        })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <Link to="/login">Login</Link>
                <FormGroup onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <Input value={this.state.firstName} name="firstName" />
                    <Input value={this.state.lastName} name="lastName" type="text" />
                    <Input value={this.state.email} name="email" type="email" />
                    <Input value={this.state.password} name="password" type="password" />
                    <Button onClick={this.handleSubmit}>Register</Button>
                </FormGroup>
            </div>
        );
    }
}

export default Register;
