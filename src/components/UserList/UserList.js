import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from '../UserItem/UserItem';    
import SearchUser from '../SearchUser/SearchUser';    
import * as actions from '../../actions/index';
import _ from 'lodash';
class UserList extends Component {
    componentDidMount() {
        this.props.fetchAllUsers();
    }
    render() {
        let { users, searchUser } = this.props;
        let filterUsers = [];
        _.forEach(users, (item) => {
            let name = item.name.toLowerCase();
            let userName = item.username.toLowerCase();
            let role = item.role.toLowerCase();
            let createdDate = (new Date(item.createdAt)).toLocaleDateString();
            if (name.includes(searchUser.name.toLowerCase())) {
                if (userName.includes(searchUser.userName.toLowerCase())) {
                    if (role === searchUser.role || searchUser.role === "all") {
                        if (createdDate.includes(searchUser.createdDate)) {
                            filterUsers.push(item);
                        }
                    }
                }
            }
        })
        let elmUsers = filterUsers.map((user, index) => {
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
                            <th className="text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <SearchUser></SearchUser>
                        {elmUsers}
                    </tbody>
                </table>
                {elmUsers.length === 0 ? <p style={{color: 'red'}}><i>Không tìm thấy kết quả phù hợp</i></p> : ""}
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users,
        searchUser: state.searchUser
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
