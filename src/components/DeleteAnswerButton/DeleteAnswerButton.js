import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import * as actions from '../../actions/index';
class DeleteAnswerButton extends Component {
    onClick = () => {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn không thể phục hồi lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa trả lời này!',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.value) {
                this.props.onDeleteAnswer(this.props.answerId);
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-danger btn-xs" style={{ marginLeft: 10 + 'px' }} onClick={this.onClick}>
                    <i className="fa fa-trash" aria-hidden="true"></i> Xóa
                </button>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteAnswer: (answerId) => {
            dispatch(actions.actDeleteAnswerRequest(answerId));
        }
    }
}
export default connect(null, mapDispatchToProps)(DeleteAnswerButton);
