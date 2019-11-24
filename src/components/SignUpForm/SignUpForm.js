import React, { Component } from 'react';
import callApi from '../../helpers/apiCaller';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            confirmPassword: "",
            error: "",
        }
    }
    onSignUp = (event) => {
        event.preventDefault();
        let loginInfo = {
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            name: this.state.name,
            role: "student"
        }
        callApi(`users/create`, 'POST', { "name": loginInfo.name, "username": loginInfo.username, "password": loginInfo.password, "confirmPassword": loginInfo.confirmPassword, "role": "student" }).then(res => {
            Swal.fire(
                'Thành công!',
                'Đăng ký thành công',
                'success'
            ).then((result) => {
                if (result.value) {
                    window.location.href = "http://localhost:3000/login";
                }
            });
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
    render() {
        if (window.localStorage.getItem('isLogged')) {
            return <Redirect to={'/sessions'} />;
        }
        return (
            <React.Fragment>
                <form>
                    {/* <div className="imgcontainer">
                        <img src="https://cdn0.iconfinder.com/data/icons/customer-service-and-feedback-part-2/64/Q_A-session-512.png" alt="Avatar" className="avatar" />
                    </div> */}
                    <div className="container" style={{ width: 50 + '%' }}>
                        <label><b>Họ và tên</b></label>
                        <div className="input-group mb-20">
                            <span className="input-group-addon"><i className="fa fa-id-badge" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" placeholder="Họ và tên..." aria-describedby="basic-addon1" name="name" value={this.state.name} onChange={this.onChange} />
                        </div>
                        <label><b>Tên đăng nhập</b></label>
                        <div className="input-group mb-20">
                            <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" placeholder="Tên đăng nhập..." aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange} />
                        </div>
                        <label><b>Mật khẩu</b></label>
                        <div className="input-group mb-20">
                            <span className="input-group-addon"><i className="fa fa-unlock-alt" aria-hidden="true"></i></span>
                            <input type="password" className="form-control" placeholder="Mật khẩu..." aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange} />
                        </div>
                        <label><b>Xác nhận lại mật khẩu</b></label>
                        <div className="input-group mb-20">
                            <span className="input-group-addon"><i className="fa fa-check-square" aria-hidden="true"></i></span>
                            <input type="password" className="form-control" placeholder="Xác nhận mật khẩu..." aria-describedby="basic-addon1" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} />
                        </div>
                        {this.state.error ? <p style={{ color: 'red', marginTop: '5px' }}><i>{this.state.error}</i></p> : ''}
                        <button type="submit" className="login-button" onClick={this.onSignUp}>Đăng ký</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
export default SignUpForm;
