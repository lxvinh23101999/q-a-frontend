import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class  ShowAnswerButton extends Component {
    onClick = () => {
        this.props.onFetchAnswers(this.props.questionId);
    }
    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-info" onClick={this.onClick}>
                <i className="fa fa-caret-down" aria-hidden="true"></i> Xem tất cả câu trả lời
                </button>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchAnswers: (questionId) => {
            dispatch(actions.actFetchAnswersOfQuestionRequest(questionId));
        }
    }
}
export default connect(null, mapDispatchToProps)(ShowAnswerButton);
