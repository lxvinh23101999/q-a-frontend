import React, { Component } from 'react';
import InfoSession from '../../components/InfoSession/InfoSession';
import QuestionFrame from '../../components/QuestionFrame/QuestionFrame';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import { Link } from 'react-router-dom';
class QuestionPage extends Component {
    render() {
        return (
            <React.Fragment>;
                <div className="container-fluid">
                    <InfoSession></InfoSession>
                    <div className="form-group">
                        <input className="form-control search" id="inputdefault" type="text" placeholder="Đặt câu hỏi..."/>
                    </div>
                    <Link to={'/'} type="button" className="btn btn-info mb-10">
                        <i className="fa fa-arrow-left" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i>
                        Trở về bảng phiên hỏi đáp
                    </Link>
                    <QuestionFrame></QuestionFrame>
                    <ScrollToTopButton></ScrollToTopButton>
                </div>
            </React.Fragment>
        );
    }
}
export default QuestionPage;
