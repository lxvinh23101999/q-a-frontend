import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SessionItem extends Component {
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
                            >{session.title}
                            </Link>
                        </h4>
                        <Link
                            to={`/sessions/${session.id}`}
                            className="session-master"
                        >Chủ tọa: {session.master}
                        </Link>
                        <p className="session-number">Số câu hỏi: {session.numberOfQuestions}</p>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
export default SessionItem;
