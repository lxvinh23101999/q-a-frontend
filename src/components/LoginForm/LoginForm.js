import React, { Component } from 'react';
import callApi from '../../helpers/apiCaller';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.css';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            showPassword: false,
            error: "",
        }
    }
    onLogin = (event) => {
        event.preventDefault();
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        }
        callApi(`users/login`, 'POST', { "username": loginInfo.username, "password": loginInfo.password }).then(res => {
            window.localStorage.setItem('isLogged',true);
            window.location.href = "http://localhost:3000/";
        }).catch(err => {
            this.setState({
                error: err.response.data
            })
        });
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }
    onShowPass = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }
    render() {
        if (window.localStorage.getItem('isLogged')) {
            return <Redirect to={'/sessions'} />;
        }
        return (
            <React.Fragment>
                <form>
                    <div className="imgcontainer">
                        <img src="https://cdn0.iconfinder.com/data/icons/customer-service-and-feedback-part-2/64/Q_A-session-512.png" alt="Avatar" className="avatar" />
                    </div>
                    <div className="container" style={{ width: 50 + '%' }}>
                        <label htmlFor="uname"><b>Tên đăng nhập</b></label>
                        <div className="input-group mb-20">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" placeholder="Tên đăng nhập..." aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange} />
                        </div>
                        <label htmlFor="psw"><b>Mật khẩu</b></label>
                        <div className="input-group mb-20">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-unlock-alt" aria-hidden="true"></i></span>
                            <input type={!this.state.showPassword ? "password" : "text"} className="form-control" placeholder="Mật khẩu..." aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange} />
                        </div>
                        <label>
                            <input type="checkbox" name="showPassword" onClick={this.onShowPass} /> Show Password
                        </label>
                        {this.state.error ? <p style={{ color: 'red', marginTop: '5px' }}><i>{this.state.error}</i></p> : ''}
                        <button type="submit" className="login-button" onClick={this.onLogin}>Đăng nhập</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
