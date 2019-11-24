import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import callApi from '../../helpers/apiCaller';
import * as actions from '../../actions/index';
class ChangeClosedAtSurveyButton extends Component {
    onClose = () => {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn không thể phục hồi lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đóng phiên khảo sát đáp này ngay!',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.value) {
                callApi('surveys/closeSurvey', 'POST', { id: this.props.surveyId }).then(res => {
                    this.props.onChangeClosedAtSurvey(this.props.surveyId, res.data.closedAt);
                    Swal.fire(
                        'Đã đóng!',
                        'Phiên khảo sát đã được đóng.',
                        'success'
                    );
                }).catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${err.response.data}`,
                    })
                });
            }
        })
    }
    onOpen = () => {
        Swal.fire({
            title: 'mm/dd/yyyy HH:mm',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'Thoát',
            confirmButtonText: 'Mở',
            showLoaderOnConfirm: true,
            preConfirm: (closedAt) => {
                return callApi('surveys/openSurvey', 'POST', { closedAt: closedAt, id: this.props.surveyId }).then(res => {
                    this.props.onChangeClosedAtSurvey(this.props.surveyId, res.data.closedAt);
                    return res.data;
                }).catch(err => {
                    Swal.showValidationMessage(
                        `Lỗi: ${err.response.data}`
                    )
                });
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Đã mở!',
                    `Phiên khảo sát đã được mở đến ${(new Date(result.value.closedAt)).toLocaleString()}.`,
                    'success'
                )
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                {(new Date(this.props.closedAt).getTime() - Date.now() > 0 || !this.props.closedAt) ?
                    <button type="button" className="btn btn-warning btn-xs" style={{ marginLeft: 10 + 'px' }} onClick={this.onClose}>
                        <i className="fa fa-lock" aria-hidden="true"></i> Đóng
                </button> :
                    <button type="button" className="btn btn-success btn-xs" style={{ marginLeft: 10 + 'px' }} onClick={this.onOpen}>
                        <i className="fa fa-unlock" aria-hidden="true"></i> Mở
                </button>}
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeClosedAtSurvey: (id, closedAt) => {
            dispatch(actions.actChangeClosedAtSurvey(id, closedAt));
        }
    }
}
export default connect(null, mapDispatchToProps)(ChangeClosedAtSurveyButton);
