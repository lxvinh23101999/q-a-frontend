import React, { Component } from 'react';
import InfoSession from '../../components/InfoSession/InfoSession';
import QuestionFrame from '../../components/QuestionFrame/QuestionFrame';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchSessionByIdRequest } from './../../actions/index';
class QuestionPage extends Component {
    componentDidMount() {
        const { match } = this.props;
        this.props.fetchQuestionsOfSession(match.params.id);
    } 
    render() {
        // console.log(this.props.session);
        return (
            <React.Fragment>;
                <div className="container-fluid">
                    <InfoSession topic={this.props.session.topic} description={this.props.session.description} createdAt={this.props.session.createdAt}></InfoSession>
                    <div className="form-group">
                        <input className="form-control search" id="inputdefault" type="text" placeholder="Đặt câu hỏi..."/>
                    </div>
                    <Link to={'/'} type="button" className="btn btn-info mb-10">
                        <i className="fa fa-arrow-left" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i>
                        Trở về bảng phiên hỏi đáp
                    </Link>
                    <QuestionFrame session={this.props.session} searchQuestion={this.props.searchQuestion}></QuestionFrame>
                    <ScrollToTopButton></ScrollToTopButton>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        session: state.questions,
        searchQuestion: state.searchQuestion
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchQuestionsOfSession : (id) => {
            dispatch(actFetchSessionByIdRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
