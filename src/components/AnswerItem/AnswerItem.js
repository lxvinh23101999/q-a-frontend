import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeleteAnswerButton from '../DeleteAnswerButton/DeleteAnswerButton';
import EditAnswerButton from '../EditAnswerButton/EditAnswerButton';
import EditAnswerInput from '../EditAnswerInput/EditAnswerInput';
import LikeAnswerButton from '../LikeAnswerButton/LikeAnswerButton';
class AnswerItem extends Component {
    render() {
        const { answer, isDisplayEditAnswerInput, closedAtSession } = this.props;
        return (
            // idQuestion, contentQuestion, Đăng bởi ai, Thời gian đăng.
            <React.Fragment>
                <div className="media itembg-color2 pd-10 mb-20">
                    <div className="media-left">
                        <img src="https://st2.depositphotos.com/3369547/11372/v/950/depositphotos_113724550-stock-illustration-businessman-concept-avatar-male-person.jpg" alt="answer" className="media-object anh" style={{ width: 45 + 'px' }} />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{answer.nameOfOwner} <small><i className="fa fa-clock-o" aria-hidden="true"></i> {(new Date(answer.createdAt)).toLocaleString()}</small></h4>
                        {isDisplayEditAnswerInput.answerId === answer.id && (new Date(closedAtSession).getTime() - Date.now() > 0 || !closedAtSession) ? <EditAnswerInput answerId={answer.id} contentAnswer={answer.contentAnswer}></EditAnswerInput> : <p><i className="fa fa-quote-left" aria-hidden="true"></i> {answer.contentAnswer} <i className="fa fa-quote-right" aria-hidden="true"></i></p>}
                        <LikeAnswerButton likeUsers={answer.likeUsers} isLiked={answer.isLiked} answerId={answer.id} questionId={answer.questionId}></LikeAnswerButton>
                        {answer.deletePermission ? <DeleteAnswerButton answerId={answer.id}></DeleteAnswerButton> : ''}
                        {(new Date(closedAtSession).getTime() - Date.now() > 0 || !closedAtSession) && answer.editPermission ? <EditAnswerButton answerId={answer.id}></EditAnswerButton> : ""}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplayEditAnswerInput: state.isDisplayEditAnswerInput,
    }
};
export default connect(mapStateToProps, null)(AnswerItem);
