import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import * as actions from '../../actions/index';
class EditAnswerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerId: this.props.answerId,
            contentAnswer: this.props.contentAnswer
        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }
    onCancel = () => {
        this.props.onResetIsDisplayEditAnswerInput();
    }
    onSave = () => {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn không thể phục hồi lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sửa câu trả lời này!',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.value) {
                let id = this.state.answerId;
                let contentAnswer = {contentAnswer: this.state.contentAnswer};
                this.props.onEditAnswer(id, contentAnswer);
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="input-group" style={{ marginBottom: 10 + 'px', borderRadius: 20 + 'px'}}>
                    <input type="text" className="form-control" value={this.state.contentAnswer} style={{borderTopLeftRadius: 15 + 'px', borderBottomLeftRadius: 15 + 'px'}} name="contentAnswer" onChange={this.onChange} />
                    <div className="input-group-btn">
                        <button className="btn btn-success" type="button" onClick={this.onSave}>
                            <i className="glyphicon glyphicon-floppy-save"> Lưu</i>
                        </button>
                        <button className="btn btn-danger" type="button" style={{borderTopRightRadius: 15 + 'px', borderBottomRightRadius: 15 + 'px'}} onClick={this.onCancel}>
                            <i className="fa fa-ban" aria-hidden="true"> Hủy</i>
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onResetIsDisplayEditAnswerInput: () => {
            dispatch(actions.resetIsDisplayEditAnswerInput());
        },
        onEditAnswer: (id, contentAnswer) => {
            dispatch(actions.actEditAnswerRequest(id, contentAnswer));
        }
    }
}
export default connect(null, mapDispatchToProps)(EditAnswerInput);
