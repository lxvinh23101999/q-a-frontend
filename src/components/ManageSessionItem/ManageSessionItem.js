import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import callApi from '../../helpers/apiCaller';
import * as actions from '../../actions/index';
class ManageSessionItem extends Component {
    onDeleteSession = () => {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn không thể phục hồi lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa phiên hỏi đáp này!',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.value) {
                let id = this.props.session.id;
                callApi(`sessions/delete/${id}`, 'DELETE', null).then(res => {
                    this.props.onDeleteSession(id);
                    Swal.fire(
                        'Đã xóa!',
                        'Phiên hỏi đáp đã được xóa.',
                        'success'
                    )
                }).catch(err => {
                    console.log(err.response.data);
                });
            }
        })
    }
    render() {
        let { index, session } = this.props;
        let checkUnLocked = (new Date(session.closedAt).getTime() - Date.now() > 0 || !session.closedAt);
        return (
            <React.Fragment>
                <tr>
                    <td className="text-center">{index}</td>
                    <td className="text-center">{session.topic}</td>
                    <td className="text-center">{session.description}</td>
                    <td className="text-center">{session.nameOfOwner}</td>
                    <td className="text-center">
                        <span
                            className={checkUnLocked ? "label label-success role-hover" : "label label-warning role-hover"}
                        >{checkUnLocked ? "Đang hoạt động" : "Đã đóng"}
                        </span>
                    </td>
                    <td className="text-center">{(new Date(session.createdAt)).toLocaleString()}</td>
                    <td className="text-center">{session.closedAt ? (new Date(session.closedAt)).toLocaleString() : "Chưa xác định"}</td>
                    <td className="text-center"><button type="button" className="btn btn-danger btn-sm" onClick={this.onDeleteSession}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button></td>
                </tr>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteSession: (id) => {
            dispatch(actions.actDeleteManageSession(id));
        }
    }
}
export default connect(null, mapDispatchToProps)(ManageSessionItem);
