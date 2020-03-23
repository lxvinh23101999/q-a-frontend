import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import SessionFrame from '../../components/SessionFrame/SessionFrame';
import ModalAddSession from '../../components/ModalAddSession/ModalAddSession';
import { Link } from 'react-router-dom';
import callApi from '../../helpers/apiCaller';
import _ from 'lodash';
class SessionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                role: 'student',
                id: -1,
            }
        }
    }
    componentDidMount() {
        callApi('sessions/list', 'GET', null).then(res => {
            setTimeout(() => {
                this.props.onChangeIsLoading();
            }, 500);
            this.setState({
                userInfo: res.data.userInfo,
            });
            this.props.onFetchSessions(res.data.sessions);
        }).catch(err => {
            if (err.response.status === 401 || err.response.status === 403) {
                window.localStorage.removeItem('isLogged');
            }
            else console.log(err.response.data);
        });
    }
    render() {
        let { sessions } = this.props;
        let unlockSessions = _.filter(sessions, function(session) { return (new Date(session.closedAt).getTime() - Date.now() > 0 || !session.closedAt); });
        return (
            <React.Fragment>
                <div className="container-fluid">
                    {this.state.userInfo.role === "student" ? "" :
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                {this.state.userInfo.role === "student" ? "" : <ModalAddSession></ModalAddSession>}
                            </div>
                        </div>}
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <div className="panel panel-default">
                                <div className="panel-heading"><i className="fa fa-bars" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i> Menu</div>
                                <div className="panel-body">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li role="presentation" className="active"><Link to={'/sessions'}>Phiên hỏi đáp</Link></li>
                                        <li role="presentation"><Link to={'/surveys'}>Phiên khảo sát</Link></li>
                                        {this.state.userInfo.role === "admin" ? <li role="presentation"><Link to={'/admin'}>Trang quản trị admin</Link></li> : ""}
                                    </ul>
                                </div>
                            </div>
                            <div style={{ borderLeft: '6px solid #4285F4', backgroundColor: '#ffff', marginBottom: '40px', paddingLeft: '5px', fontSize: '15px', fontWeight: 'bold' }}>
                                <p>Tổng số phiên hỏi đáp: {sessions.length} </p>
                            </div>
                            <div style={{ borderLeft: '6px solid #449D44', backgroundColor: '#ffff', marginBottom: '40px', paddingLeft: '5px', fontSize: '15px', fontWeight: 'bold'  }}>
                                <p>Phiên hỏi đáp đang hoạt động: {unlockSessions.length}</p>
                            </div>
                            <div style={{ borderLeft: '6px solid #EC971F', backgroundColor: '#ffff', marginBottom: '40px', paddingLeft: '5px', fontSize: '15px', fontWeight: 'bold'  }}>
                                <p>Phiên hỏi đáp đã đóng: {sessions.length - unlockSessions.length}</p>
                            </div>
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            <SessionFrame userInfo={this.state.userInfo}></SessionFrame>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        sessions: state.sessions
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeIsLoading: () => {
            dispatch(actions.changeIsLoading());
        },
        onFetchSessions: (sessions) => {
            dispatch(actions.actFetchSessions(sessions));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
