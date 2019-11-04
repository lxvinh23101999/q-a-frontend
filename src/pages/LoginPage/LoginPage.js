import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
class Login extends Component {
    render() {
        // console.log(this.props.history);
        return (
            <React.Fragment>
                <LoginForm history={this.props.history}></LoginForm>
            </React.Fragment>
        );      
    }
}
export default Login;
