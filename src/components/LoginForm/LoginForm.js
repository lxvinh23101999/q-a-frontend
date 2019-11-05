import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import './style.css';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    onLogin = (event) => {
        event.preventDefault();
        this.props.onLogin(this.state);
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="imgcontainer">
                        <img src="https://cdn0.iconfinder.com/data/icons/customer-service-and-feedback-part-2/64/Q_A-session-512.png" alt="Avatar" className="avatar" />
                    </div>
                    <div className="container" style={{width: 50 + '%'}}>
                        <label htmlFor="uname"><b>Tên đăng nhập</b></label>
                        <div className="input-group mb-20">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" placeholder="Tên đăng nhập..." aria-describedby="basic-addon1" name="username" value={ this.state.username } onChange={this.onChange} required/>
                        </div>
                        <label htmlFor="psw"><b>Mật khẩu</b></label>
                        <div className="input-group mb-20">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-unlock-alt" aria-hidden="true"></i></span>
                            <input type="password" className="form-control" placeholder="Mật khẩu..." aria-describedby="basic-addon1" name="password" value={ this.state.password } onChange={this.onChange} required/>
                        </div>
                        <label>
                            <input type="checkbox" defaultChecked="checked" name="remember"/> Remember me
                        </label>
                        <button type="button" className="login-button" onClick={this.onLogin}>Đăng nhập</button>
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
        onLogin : (loginInfo) => {
            dispatch(actions.actLoginRequest(loginInfo));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
