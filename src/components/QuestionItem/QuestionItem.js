import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
// import * as actions from '../../actions/index';
import AnswerItem from '../AnswerItem/AnswerItem';
import InputAnswer from '../InputAnswer/InputAnswer';
import ShowAnswerButton from '../ShowAnswerButton/ShowAnswerButton';
import ShowInputAnswerButton from '../ShowInputAnswerButton/ShowInputAnswerButton';
import DeleteQuestionButton from '../DeleteQuestionButton/DeleteQuestionButton';
import HideAnswerButton from '../HideAnswerButton/HideAnswerButton';
import LikeQuestionButton from '../LikeQuestionButton/LikeQuestionButton';
// import Loader from '../Loader/Loader';
class QuestionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayAnswer: false
        }
    }
    render() {
        let { question, answers, closedAtSession, isDisplayInputAnswer } = this.props;
        let index = _.findIndex(answers, function (item) { return item.questionId === question.id; });
        let answersOfQuestion = [];  // Lấy câu trả lời của câu hỏi này
        let isDisplayHideAnswerButton = answers[index] ? answers[index].isDisplayHideAnswerButton : false;
        if (answers[index] && answers[index] !== []) {
            answersOfQuestion = answers[index].answers;
        }
        let elmAnswers = [];
        if (answersOfQuestion && answersOfQuestion !== []) {
            elmAnswers = answersOfQuestion.map((answer, index) => {
                return <AnswerItem key={answer.id} index={index + 1} answer={answer} closedAtSession={closedAtSession} />
            });
        }
        return (
            // idQuestion, contentQuestion, Đăng bởi ai, Thời gian đăng.
            <React.Fragment>
                <div className="media mb-30 itembg-color pd-15">
                    <div className="media-left">
                        <img src="https://www.w3schools.com/bootstrap/img_avatar3.png" alt="anh" className="media-object anh" />
                    </div>
                    <div className="media-body">
                        <div className="row">
                            <h4 className="media-heading col-xs-11 col-sm-11 col-md-11 col-lg-11">
                                <Link
                                    to={'/'}
                                    className="question-content"
                                >Câu hỏi: {question.contentQuestion}
                                </Link>
                                {/* <span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span> */}
                            </h4>
                        </div>
                        <Link
                            to={'/'}
                            className="question-user"
                        >Đăng bởi: {question.nameOfOwner} <i className="fa fa-clock-o" aria-hidden="true"></i> {(new Date(question.createdAt)).toLocaleString()}
                        </Link>
                        <p className="question-number">{question.numberOfAnswers === 0 ? 'Chưa có câu trả lời' : `Số câu trả lời: ${question.numberOfAnswers}`} - Số lượt thích: {question.likeUsers ? question.likeUsers.length : 0}</p>
                        <LikeQuestionButton isLiked={question.isLiked} questionId={question.id} likeUsers={question.likeUsers}></LikeQuestionButton>
                        {(new Date(closedAtSession).getTime() - Date.now() > 0 || !closedAtSession) ? <ShowInputAnswerButton questionId={question.id}></ShowInputAnswerButton> : ""}
                        {question.deletePermission ? <DeleteQuestionButton questionId={question.id}></DeleteQuestionButton> : ''}
                        <hr />
                        {isDisplayInputAnswer[question.id] && (new Date(closedAtSession).getTime() - Date.now() > 0 || !closedAtSession) ? <InputAnswer questionId={question.id}></InputAnswer> : ''}
                        {elmAnswers}
                        {question.numberOfAnswers !== 0 && !isDisplayHideAnswerButton ? <ShowAnswerButton key={question.id} questionId={question.id}></ShowAnswerButton> : ''}
                        {question.numberOfAnswers !== 0 && isDisplayHideAnswerButton ? <HideAnswerButton questionId={question.id}></HideAnswerButton> : ''}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplayInputAnswer: state.isDisplayInputAnswer,
        answers: state.answers
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionItem);
