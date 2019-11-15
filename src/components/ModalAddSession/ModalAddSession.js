import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import callApi from '../../helpers/apiCaller';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ModalAddSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            description: '',
            password: '',
            closedAt: ''
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
        callApi('sessions/create', 'POST', this.state).then(res => {
            this.props.onAddSession((res.data));
            toast.success(`${res.data.message}`, { containerId: 'A' });
            this.onClear();
        }).catch(err => {
            toast.error(`${err.response.data}`, { containerId: 'A' });
        });
    }
    onClear = () => {
        this.setState({
            topic: '',
            description: '',
            password: '',
            closedAt: '',
        });
    }
    render() {
        let { isDisplayAddButton } = this.props;
        if (isDisplayAddButton.role === "user") return "";
        return (
            <React.Fragment>
                <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} />
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
                                    <div className="form-group">
                                        <label className="col-form-label">Ngày đóng:</label>
                                        <input type="datetime-local" className="form-control" value={this.state.closedAt} name="closedAt" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Mật khẩu:</label>
                                        <input type="password" className="form-control" value={this.state.password} name="password" onChange={this.onChange} />
                                    </div>
                                    <small><i>* Ngày đóng và mật khẩu có thể bỏ trống</i></small>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal"><span className="fa fa-ban" aria-hidden="true"></span> Thoát</button>
                                <button type="button" className="btn btn-info" onClick={this.onClear}><span className="fa fa-refresh mr-5"></span> Làm mới</button>
                                <button type="button" className="btn btn-success" onClick={this.onSubmit}><span className="fa fa-plus mr-5"></span> Lưu lại</button>
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
        onAddSession: (data) => {
            dispatch(actions.actAddSession(data));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalAddSession);
