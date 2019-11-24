import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import callApi from '../../helpers/apiCaller';
import ChangeClosedAtSurveyButton from '../ChangeClosedAtSurveyButton/ChangeClosedAtSurveyButton';
import * as actions from '../../actions/index';
class SurveyItem extends Component {
    onClick = (e) => {
        e.preventDefault();
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
                let id = this.props.survey.id;
                callApi(`surveys/delete/${id}`, 'DELETE', null).then(res => {
                    Swal.fire(
                        'Đã xóa!',
                        'Phiên khảo sát đã được xóa.',
                        'success'
                    )
                    this.props.onDeleteSurvey(id);
                }).catch(err => {
                    console.log(err);
                });
            }
        })
    }
    render() {
        let { survey } = this.props;
        return (
            <React.Fragment>
                <div className="media mb-30 itembg-color pd-10">
                    <div className="media-left">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6eterSSnQG-3fC7LS9ypXRW4JZlErw6C6Br_IGE7nBQcxsvZx&s" alt="anh" className="media-object anh" />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">
                            <Link
                                to={`/surveys/${survey.id}`}
                                className="survey-title"
                            >Chủ đề: {survey.topic}
                                {/* {survey.hasPassword ? <i className="fa fa-lock" aria-hidden="true"></i> : <i className="fa fa-unlock" aria-hidden="true"></i>} */}
                            </Link>
                        </h4>
                        <Link
                            to={`/surveys/${survey.id}`}
                            className="survey-master"
                        >Chủ tọa: {survey.nameOfOwner}
                        </Link>
                        <p className="survey-number"><span className="badge">{survey.surveyQuestions.length === 0 ? "Chưa có câu hỏi" : `Số câu hỏi: ${survey.surveyQuestions.length}`} </span><span className="fa fa-clock-o badge" aria-hidden="true"> {(new Date(survey.createdAt)).toLocaleString()}</span><span className="fa fa-times badge" aria-hidden="true"> {!survey.closedAt ? "Chưa xác định" : (new Date(survey.closedAt)).toLocaleString()}</span></p>
                        {survey.permission ? <button type="button" className="btn btn-danger btn-xs" onClick={this.onClick}>
                            <i className="fa fa-trash" aria-hidden="true"></i> Xóa
                        </button> : ""}
                        {!survey.permission ? "" : <ChangeClosedAtSurveyButton closedAt={survey.closedAt} surveyId={survey.id}></ChangeClosedAtSurveyButton>}
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteSurvey: (id) => {
            dispatch(actions.actDeleteSurvey(id));
        }
    }
}
export default connect(null, mapDispatchToProps)(SurveyItem);