import React, { Component } from 'react';
import SurveyQuestionItem from '../SurveyQuestionItem/SurveyQuestionItem';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import callApi from '../../helpers/apiCaller';
import * as actions from '../../actions/index';
class SurveyQuestionFrame extends Component {
    onSubmit = () => {
        let { surveyQuestions } = this.props;
        let id = this.props.surveyId;
        let data = [];
        for (let i = 0; i < surveyQuestions.length; i++) {
            let x = document.getElementsByName(surveyQuestions[i].id);
            for (let j = 0; j < x.length; j++) {
                if (x[j].type === "checkbox" || x[j].type === "radio") {
                    if (x[j].checked === true) {
                        // console.log(x[j]); // name: questionId, value: selectionId
                        data.push({ surveyQuestionId: x[j].name, selectionId: x[j].value });
                    }
                }
            }
        }
        callApi(`surveys/vote/${id}`, 'POST', data).then(res => {
            this.props.onVoteSurvey(data, res.data.userInfo);
            Swal.fire(
                'Thành công!',
                'Câu trả lời đã được ghi nhận.',
                'success'
            )
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.response.data}`,
            })
            // console.log(err);
        });
    }
    render() {
        let { surveyQuestions } = this.props;
        let elmQuestions = surveyQuestions.map((surveyQuestion, index) => {
            return <SurveyQuestionItem key={surveyQuestion.id} index={index + 1} surveyQuestion={surveyQuestion} isLocked={this.props.isLocked}></SurveyQuestionItem>
        });
        let elmIndexs = surveyQuestions.map((surveyQuestion, index) => {
            let hf = "#" + (index + 1);
            let color = surveyQuestion.isResponded ? 'green' : 'red';
            return <a key={index} href={hf} style={{margin: '2px', color}}>{index + 1}</a>
        });
        return (
            <React.Fragment>
                <div className="panel panel-default">
                    {/* <div className="panel-heading"><h4><i className="fa fa-bars" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i>Danh sách câu hỏi khảo sát</h4></div> */}
                    <div className="panel-body bg-color" style={{ position: 'relative' }}>
                        <div className="panel panel-default" style={{ position: 'fixed'}}>
                            <div className="panel-heading">Bảng câu hỏi</div>
                            <div className="panel-body">
                                {elmIndexs}
                            </div>
                        </div>
                        <div className="container" style={{ width: '50%'}}>
                            {elmQuestions}
                        </div>
                    </div>
                    <div className="panel-footer text-center">
                        <button className="btn btn-success" onClick={this.onSubmit}>Ghi nhận</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        surveyQuestions: state.surveyQuestions
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onVoteSurvey: (data, userInfo) => {
            dispatch(actions.actVoteSurvey(data, userInfo));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SurveyQuestionFrame);
