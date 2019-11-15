import React, { Component } from 'react';
class QuestionPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="jumbotron">
                    <div className="media" style={{ marginBottom: 30 + 'px' }}>
                        <div className="media-left">
                            <img src="https://cdn0.iconfinder.com/data/icons/customer-service-and-feedback-part-2/64/Q_A-session-512.png" alt="hihi" className="media-object" style={{ width: 100 + 'px' }} />
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{this.props.nameOfOwner} <small><i className="fa fa-clock-o" aria-hidden="true"></i> <i>{(new Date(this.props.createdAt)).toLocaleString()}</i></small></h4>
                            <p>Chủ đề: {this.props.topic}</p>
                            <p>Mô tả: {this.props.description}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default QuestionPage;
