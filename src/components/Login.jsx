import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
    state = { login: '', password: '' }

    handleSubmit = () => {
        const { login, password } = this.state;
        const { loginAttempt } = this.props;
        console.log('this.props', this.props)
        loginAttempt({ login, password })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <Link to="/register">Register</Link>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <input value={this.state.login} name="login" type="email" />
                    <input value={this.state.password} name="password" type="password" />
                    <button type="submit">Login</button>
                </form>
            </div>

        );
    }
}

export default Login;
