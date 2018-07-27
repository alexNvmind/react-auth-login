import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

@withRouter
class Login extends Component {
    state = { email: '', password: '' }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state;
        const { loginAttempt, setToken } = this.props;
        loginAttempt({ email, password }).then(({ data: { token } }) => {
            setToken(token)
            this.props.history.push('/user')
        })
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
                    <input value={this.state.email} name="email" type="email" />
                    <input value={this.state.password} name="password" type="password" />
                    <button type="submit">Login</button>
                </form>
            </div>

        );
    }
}

export default Login;
