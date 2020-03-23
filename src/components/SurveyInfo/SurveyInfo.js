import React, { Component } from 'react';
class SurveyInfo extends Component {
    render() {
        let { survey } = this.props;
        return (
            <React.Fragment>
                <div className="jumbotron">
                    <div className="media" style={{ marginBottom: 30 + 'px' }}>
                        <div className="media-left">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6eterSSnQG-3fC7LS9ypXRW4JZlErw6C6Br_IGE7nBQcxsvZx&s" alt="hihi" className="media-object" style={{ width: 100 + 'px' }} />
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{survey.nameOfOwner} <small><i className="fa fa-clock-o" aria-hidden="true"></i> <i>{(new Date(survey.createdAt)).toLocaleString()}</i></small></h4>
                            <p>Chủ đề: {survey.topic}</p>
                            <p><i className="fa fa-sticky-note-o" aria-hidden="true"></i> Mô tả: {survey.description}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default SurveyInfo;
