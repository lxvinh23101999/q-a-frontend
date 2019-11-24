import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import callApi from '../../helpers/apiCaller';
import * as actions from '../../actions/index';
class ManageSurveyItem extends Component {
    onDeleteSurvey = () => {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn không thể phục hồi lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa phiên khảo sát này!',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.value) {
                let id = this.props.survey.id;
                callApi(`surveys/delete/${id}`, 'DELETE', null).then(res => {
                    this.props.onDeleteSurvey(id);
                    Swal.fire(
                        'Đã xóa!',
                        'Phiên khảo sát đã được xóa.',
                        'success'
                    )
                }).catch(err => {
                    console.log(err.response.data);
                });
            }
        })
    }
    render() {
        let { index, survey } = this.props;
        let checkUnLocked = (new Date(survey.closedAt).getTime() - Date.now() > 0 || !survey.closedAt);
        return (
            <React.Fragment>
                <tr>
                    <td className="text-center">{index}</td>
                    <td className="text-center">{survey.topic}</td>
                    <td className="text-center">{survey.description}</td>
                    <td className="text-center">{survey.nameOfOwner}</td>
                    <td className="text-center">
                        <span
                            className={checkUnLocked ? "label label-success role-hover" : "label label-warning role-hover"}
                        >{checkUnLocked ? "Đang hoạt động" : "Đã đóng"}
                        </span>
                    </td>
                    <td className="text-center">{(new Date(survey.createdAt)).toLocaleString()}</td>
                    <td className="text-center">{survey.closedAt ? (new Date(survey.closedAt)).toLocaleString() : "Chưa xác định"}</td>
                    <td className="text-center"><button type="button" className="btn btn-danger btn-sm" onClick={this.onDeleteSurvey}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button></td>
                </tr>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteSurvey: (id) => {
            dispatch(actions.actDeleteManageSurvey(id));
        }
    }
}
export default connect(null, mapDispatchToProps)(ManageSurveyItem);
