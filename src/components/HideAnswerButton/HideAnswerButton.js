import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class  HideAnswerButton extends Component {
    onClick = (e) => {
        e.preventDefault();
        this.props.onHideAnswers(this.props.questionId);
    }
    render() {
        return (
            <React.Fragment>
                <a href="/" onClick={this.onClick}><i className="fa fa-caret-up" aria-hidden="true"></i> Ẩn câu trả lời</a>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onHideAnswers: (questionId) => {
            dispatch(actions.actHideAnswersOfQuestion(questionId));
        }
    }
}
export default connect(null, mapDispatchToProps)(HideAnswerButton);
