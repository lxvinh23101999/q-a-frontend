import React, { Component } from 'react';
import SessionFrame from '../../components/SessionFrame/SessionFrame';
import ModalAddSession from '../../components/ModalAddSession/ModalAddSession';
class SessionPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <ModalAddSession></ModalAddSession>
                    <SessionFrame></SessionFrame>
                </div>
            </React.Fragment>
        );
    }
}
export default SessionPage;
