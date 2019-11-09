import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import * as actions from '../../actions/index';
class UserItem extends Component {
    // constructor(props) {
    //     super(props);
    // }
    onDeleteUser = () => {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn không thể phục hồi lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa người dùng này!',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.value) {
                this.props.onDeleteUser(this.props.user.id);
            }
        })
    }
    onResetPassword = () => {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn không thể phục hồi lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đặt lại',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.value) {
                this.props.onResetPassword(this.props.user.id);
            }
        })
    }
    onChangeRole = () => {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: 'Vai trò của người này sẽ thay đổi!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Thay đổi',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.value) {
                this.props.onChangeRole(this.props.user.id);
            }
        })
    }
    render() {
        let { index, user, isDisplayAddUserForm } = this.props;
        return (
            <React.Fragment>
                <tr>
                    <td className="text-center">{index}</td>
                    <td className="text-center">{user.name}</td>
                    <td className="text-center">{user.username}</td>
                    <td className="text-center">
                        <span
                            className={user.role === "admin" ? "label label-success role-hover" : user.role === "master" ? "label label-warning role-hover" : "label label-danger role-hover"}
                            onClick={this.onChangeRole}
                        >{user.role}
                        </span>
                    </td>
                    <td className="text-center">{(new Date(user.createdAt)).toLocaleDateString()}</td>
                    {(user.role !== "admin" || user.username !== "admin") & (!isDisplayAddUserForm) ?
                        <td className="text-center">
                            <button type="button" className="btn btn-info btn-sm" onClick={this.onResetPassword}>
                                <span className="fa fa-refresh mr-5"></span>Đặt lại mật khẩu
                        </button>
                            &nbsp;
                        <button type="button" className="btn btn-danger btn-sm" onClick={this.onDeleteUser}>
                                <span className="fa fa-trash mr-5"></span>Xóa
                        </button>
                        </td> : <td></td>}
                </tr>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplayAddUserForm: state.isDisplayAddUserForm
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteUser: (id) => {
            dispatch(actions.actDeleteUserRequest(id));
        },
        onResetPassword: (id) => {
            dispatch(actions.actResetPasswordRequest(id));
        },
        onChangeRole: (id) => {
            dispatch(actions.actChangeRoleRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
