import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import * as actions from '../../actions/index';
class SessionItem extends Component {
    onClick = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn không thể phục hồi lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa phiên hỏi đáp này!',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.value) {
                this.props.onDeleteSession(this.props.session.id);
            }
        })
    }
    render() {
        let { session } = this.props;
        return (
            <React.Fragment>
                <div className="media mb-30 itembg-color pd-15">
                    <div className="media-left">
                        <img src="https://cdn0.iconfinder.com/data/icons/customer-service-and-feedback-part-2/64/Q_A-session-512.png" alt="anh" className="media-object anh" />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">
                            <Link
                                to={`/sessions/${session.id}`}
                                className="session-title"
                            >{session.topic}
                            </Link>
                        </h4>
                        <Link
                            to={`/sessions/${session.id}`}
                            className="session-master"
                        >Chủ tọa: {session.nameOfOwner}
                        </Link>
                        <p className="session-number">{session.questions.length === 0 ? "Chưa có câu hỏi" : `Số câu hỏi: ${session.questions.length}`}  <i className="fa fa-clock-o" aria-hidden="true"></i> {(new Date(session.createdAt)).toLocaleString()} <a href="/" onClick={this.onClick}>{session.permission ? "Xóa" : ""}</a></p>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteSession: (id) => {
            dispatch(actions.actDeleteSessionRequest(id));
        }
    }
}
export default connect(null, mapDispatchToProps)(SessionItem);