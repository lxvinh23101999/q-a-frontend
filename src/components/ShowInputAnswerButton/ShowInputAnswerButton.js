import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class ShowInputAnswerButton extends Component {
    onClick = () => {
        this.props.onChangeIsDisplayInputAnswer(this.props.questionId);
    }
    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-success" style={{ marginLeft: 10 + 'px' }} onClick={this.onClick}>
                    <i className="fa fa-reply" aria-hidden="true"></i> Trả lời
                </button>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeIsDisplayInputAnswer: (questionId) => {
            dispatch(actions.changeIsDisplayInputAnswer(questionId));
        }
    }
}
export default connect(null, mapDispatchToProps)(ShowInputAnswerButton);
