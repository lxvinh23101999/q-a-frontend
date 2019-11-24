import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../helpers/apiCaller';
import * as actions from '../../actions/index';
import ManageSessionList from '../ManageSessionList/ManageSessionList';
class ManageSessionFrame extends Component {
    componentDidMount() {
        callApi('sessions/listbyadmin', 'GET', null).then(res => {
            this.props.onFetchManageSessions(res.data.sessions);            
        }).catch(err => {
            console.log(err.response.data);
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <h1>Quản lý phiên hỏi đáp</h1><hr />
                </div>
                <ManageSessionList></ManageSessionList>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchManageSessions: (sessions) => {
            dispatch(actions.actFetchManageSessions(sessions));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageSessionFrame);
