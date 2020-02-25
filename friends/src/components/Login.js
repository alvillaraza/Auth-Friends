import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
        .then(res => (console.log(res)))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input type='text' name='username' placeholder='username' value={this.state.credentials.username} onChange={this.handleChange} />
                    <input type='text' name='password' placeholder='password' value={this.state.credentials.password} onChange={this.handleChange} />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;