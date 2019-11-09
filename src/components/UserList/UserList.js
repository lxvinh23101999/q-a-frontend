import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from '../UserItem/UserItem';    
import * as actions from '../../actions/index';
class UserList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.fetchAllUsers();
    }
    render() {
        let { users, isDisplayAddUserForm } = this.props;
        let elmUsers = users.map((user, index) => {
            return <UserItem key={user.id} index={index + 1} user={user} />
        });
        return (
            <React.Fragment>
                <table className="table table-bordered tabel-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Họ và tên</th>
                            <th className="text-center">Username</th>
                            <th className="text-center">Vai trò</th>
                            <th className="text-center">Ngày tạo</th>
                            {isDisplayAddUserForm ? <th></th> : <th className="text-center">Hành động</th>}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control" name="filterName" />
                            </td>
                            <td>
                                <input type="text" className="form-control" name="filterName" />
                            </td>
                            <td>
                                <select className="form-control" name="filterStatus">
                                    <option value={-1}>Tất cả</option>
                                    <option value={0}>Admin</option>
                                    <option value={0}>Master</option>
                                    <option value={1}>Student</option>
                                </select>
                            </td>
                            <td>
                                <input type="text" className="form-control" name="filterName" />    
                            </td>
                            <td></td>
                        </tr>
                        {elmUsers}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users,
        isDisplayAddUserForm: state.isDisplayAddUserForm
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUsers: () => {
            dispatch(actions.actFetchUsersRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
