import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class EditAnswerButton extends Component {
    onClick = () => {
        this.props.onChangeIsDisplayEditAnswerInput(this.props.answerId);
    }
    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-warning btn-xs" style={{ marginLeft: 10 + 'px' }} onClick={this.onClick}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Chỉnh sửa
                </button>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeIsDisplayEditAnswerInput: (answerId) => {
            dispatch(actions.changeIsDisplayEditAnswerInput(answerId));
        }
    }
}
export default connect(null, mapDispatchToProps)(EditAnswerButton);
