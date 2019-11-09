import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            confirmPassword: "",
            role: "student"
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }
    onAddUser = () => {
        // this.onClearForm();
        this.props.onAddUser(this.state);
    }
    onCloseForm = () => {
        this.props.onCloseForm();
        this.onClearForm();
    }
    onClearForm = () => {
        this.setState({
            name: "",
            username: "",
            password: "",
            confirmPassword: "",
            role: "student"
        })
    }
    render() {
        if (!this.props.isDisplayAddUserForm) {
            return "";
        };
        return (
            <React.Fragment>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Thêm người dùng
                            <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Họ và tên: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Tên đăng nhập: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu: </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Xác nhận mật khẩu: </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    onChange={this.onChange}
                                />
                            </div>
                            <label>Vai trò: </label>
                            <select className="form-control" name="role" value={this.state.role} onChange={this.onChange}>
                                <option value="admin">Admin</option>
                                <option value="master">Master</option>
                                <option value="student">Student</option>
                            </select><br />
                            <div className="text-center">
                                <button type="button" className="btn btn-success" onClick={this.onAddUser}>
                                    <span className="fa fa-plus mr-5"></span>Lưu lại
                                </button>&nbsp;
                                <button type="button" className="btn btn-info" onClick={this.onClearForm}>
                                    <span className="fa fa-refresh mr-5"></span>Làm mới
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplayAddUserForm: state.isDisplayAddUserForm,
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onCloseForm: () => {
            dispatch(actions.changeIsDisplayAddUserForm());
        },
        onAddUser: (userInfo) => {
            dispatch(actions.actAddUserRequest(userInfo));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
