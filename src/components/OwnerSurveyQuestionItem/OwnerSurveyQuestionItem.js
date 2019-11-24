import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import * as actions from '../../actions/index';
import OwnerSelectionItem from '../OwnerSelectionItem/OwnerSelectionItem';
import callApi from '../../helpers/apiCaller';
class OwnerSurveyQuestionItem extends Component {
    onDeleteSurveyQuestion = () => {
        let id = this.props.surveyQuestion.id;
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn không thể phục hồi lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa câu khảo sát này!',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.value) {
                callApi(`surveyQuestions/delete/${id}`, 'GET', null).then(res => {
                    Swal.fire(
                        'Đã xóa!',
                        'Câu khảo sát đã được xóa.',
                        'success'
                    );
                    this.props.onDeleteSurveyQuestion(id);
                }).catch(err => {
                    console.log(err.response.data);
                });
            }
        })

    }
    render() {
        let { surveyQuestion } = this.props;
        let selections = surveyQuestion.selections;
        let elmSelections = selections.map((selection, index) => {
            return <OwnerSelectionItem key={index} index={index + 1} selection={selection} typeQuestion={surveyQuestion.typeQuestion}></OwnerSelectionItem>
        });
        return (
            <React.Fragment>
                <div className="container" style={{ width: '50%', borderLeft: '6px solid #4285F4', backgroundColor: '#ffff', borderRadius: '10px', marginBottom: '40px' }}>
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="form-group">
                                <label className="col-form-label">Nội dung câu hỏi:</label>
                                <input type="text" className="form-control" name="contentQuestion" value={surveyQuestion.contentQuestion} readOnly />
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="form-group">
                                <label className="col-form-label">Loại câu hỏi:</label>
                                <input type="text" className="form-control" name="typeQuestion" value={surveyQuestion.typeQuestion === 1 ? "Trắc nghiệm" : "Hộp kiểm"} readOnly />
                            </div>
                        </div>
                    </div>
                    {elmSelections}
                    <button className="btn btn-danger" onClick={this.onDeleteSurveyQuestion}><i className="fa fa-trash-o" aria-hidden="true"></i> Xóa câu hỏi</button>
                </div>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteSurveyQuestion: (id) => {
            dispatch(actions.actDeleteSurveyQuestion(id));
        }
    }
}
export default connect(null, mapDispatchToProps)(OwnerSurveyQuestionItem);
