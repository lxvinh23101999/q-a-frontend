import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class ModalAddSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            description: '',
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
    onSubmit = () => {
        this.props.onAddSession(this.state);
        this.onClear();
    }
    onClear = () => {
        this.setState({
            topic: '',
            description: ''
          });
    }
    render() {
        let { isDisplayAddButton } = this.props;
        if (isDisplayAddButton.role === "user") return "";
        return (
            <React.Fragment>
                <button type="button" className="btn btn-primary mb-20" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-plus-circle mr-5" aria-hidden="true"></i>
                    Thêm phiên hỏi đáp
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title" id="exampleModalLabel">Thêm phiên hỏi đáp</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label className="col-form-label">Chủ đề:</label>
                                        <input type="text" className="form-control" id="recipient-name" value={this.state.topic} name="topic" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Mô tả:</label>
                                        <textarea className="form-control" id="message-text" value={this.state.description} name="description" onChange={this.onChange} ></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Thoát</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.onSubmit}>Lưu lại</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplayAddButton: state.isDisplayAddButton,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddSession : (session) => {
            dispatch(actions.actAddSessionRequest(session));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalAddSession);
