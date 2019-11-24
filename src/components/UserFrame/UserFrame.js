import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../UserList/UserList';
import AddUserForm from '../AddUserForm/AddUserForm';
import callApi from '../../helpers/apiCaller';
import * as actions from '../../actions/index';
// import Swal from 'sweetalert2';
class UserFrame extends Component {
    componentDidMount() {
        callApi('users/list', 'GET', null).then(res => {
            this.props.onFetchUsers(res.data);
        }).catch(err => {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: `${err.response.data.message}`,
            // }).then(result => {
            //     window.location.href = "http://localhost:3000/";
            // });
            window.location.href = "http://localhost:3000/";
        });
    }
    onToggleAddForm = () => {
        this.props.onChangeIsDisplayAddUserForm();
    }
    render() {
        let { isDisplayAddUserForm } = this.props;
        return (
            <React.Fragment>
                <div className="text-center">
                    <h1>Quản lý người dùng</h1><hr />
                </div>
                <div className="row">
                    <div className={isDisplayAddUserForm ? "col-xs-3 col-sm-3 col-md-3 col-lg-3" : ""}>
                        <AddUserForm></AddUserForm>
                    </div>
                    <div className={isDisplayAddUserForm ? "col-xs-9 col-sm-9 col-md-9 col-lg-9" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary mb-20" onClick={this.onToggleAddForm}>
                            <span className="fa fa-plus mr-5"></span> Thêm người dùng
                            </button>
                        <UserList></UserList>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplayAddUserForm: state.isDisplayAddUserForm,
        users: state.users
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeIsDisplayAddUserForm: () => {
            dispatch(actions.changeIsDisplayAddUserForm());
        },
        onFetchUsers: (users) => {
            dispatch(actions.actFetchUsers(users));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserFrame);
