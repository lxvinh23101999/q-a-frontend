import React, { Component } from 'react';
import { connect } from 'react-redux';
class MyInfoHeader extends Component {
    render() {
        let { user } = this.props;
        return (
            <React.Fragment>
                <div className="container jumbotron">
                    <div className="media">
                        <div className="media-left">
                            <img src="http://qa.uet.vnu.edu.vn/qa/public/img/student.png" alt="hihi" className="media-object" style={{ width: 200 + 'px' }} />
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading" style={{ color: '#365899', marginBottom: '10px' }}><i className="fa fa-user-circle-o" aria-hidden="true"></i> {user.name}</h4>
                            <p style={{ fontSize: '14px', marginBottom: '5px' }}><i className="fa fa-graduation-cap" aria-hidden="true"></i> Chức vụ: {user.role}</p>
                            <p style={{ fontSize: '14px', marginBottom: '5px' }}><i className="fa fa-calendar" aria-hidden="true"></i> Tham gia từ: {(new Date(user.createdAt)).toLocaleDateString()}</p>
                            <span style={{ fontSize: '14px', marginBottom: '5px', cursor: 'pointer' }} data-toggle="collapse" data-target="#demo"><i className="fa fa-info-circle" aria-hidden="true"></i> More</span>
                            <div id="demo" className="collapse">
                                <p style={{ fontSize: '14px', marginBottom: '5px' }}><i className="fa fa-question-circle-o" aria-hidden="true"></i> Số câu hỏi: {user.questions ? user.questions.length : ''} </p>
                                <p style={{ fontSize: '14px', marginBottom: '5px' }}><i className="fa fa-question-circle-o" aria-hidden="true"></i> Số câu trả lời: {user.questions ? user.answers.length : ''}</p>
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
        user: state.myBasicInfo,
    }
};
export default connect(mapStateToProps, null)(MyInfoHeader);
