import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import ChangeClosedAtButton from '../ChangeClosedAtButton/ChangeClosedAtButton';
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
                <div className="media mb-30 itembg-color pd-10">
                    <div className="media-left">
                        <img src="https://cdn0.iconfinder.com/data/icons/customer-service-and-feedback-part-2/64/Q_A-session-512.png" alt="anh" className="media-object anh" />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">
                            <Link
                                to={`/sessions/${session.id}`}
                                className="session-title"
                            >Chủ đề: {session.topic}
                             {/* {session.hasPassword ? <i className="fa fa-lock" aria-hidden="true"></i> : <i className="fa fa-unlock" aria-hidden="true"></i>} */}
                            </Link>
                        </h4>
                        <Link
                            to={`/sessions/${session.id}`}
                            className="session-master"
                        >Chủ tọa: {session.nameOfOwner}
                        </Link>
                        <p className="session-number"><span className="badge">{session.questions.length === 0 ? "Chưa có câu hỏi" : `Số câu hỏi: ${session.questions.length}`} </span><span className="fa fa-clock-o badge" aria-hidden="true"> {(new Date(session.createdAt)).toLocaleString()}</span><span className="fa fa-times badge" aria-hidden="true"> {!session.closedAt ? "Chưa xác định" : (new Date(session.closedAt)).toLocaleString()}</span></p>
                        {session.permission ? <button type="button" className="btn btn-danger btn-xs" onClick={this.onClick}>
                            <i className="fa fa-trash" aria-hidden="true"></i> Xóa
                        </button> : ""}
                        {!session.permission ? "" : <ChangeClosedAtButton closedAt={session.closedAt} sessionId={session.id}></ChangeClosedAtButton>}
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