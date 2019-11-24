import React, { Component } from 'react';
import InfoSession from '../../components/InfoSession/InfoSession';
import QuestionFrame from '../../components/QuestionFrame/QuestionFrame';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import * as actions from '../../actions/index';
import callApi from '../../helpers/apiCaller';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EnterSessionPasswordForm from '../../components/EnterSessionPasswordForm/EnterSessionPasswordForm';
class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionId: '',
            contentQuestion: '',
            isJoined: false
        }
    }
    componentDidMount() {
        const { match } = this.props;
        let id = match.params.id;
        callApi(`sessions/getbyid/${id}`, 'GET', null).then(res => {
            if (res.data && res.data.isJoined) {
                this.setState({
                    isJoined: true
                });
                this.props.onFetchQuestionsOfSession(res.data.session);
            }
        }).catch(err => {
        });
    } 
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            sessionId: this.props.session.id,
            [name]: value
        });
    }
    onKeyPress = (e) => {
        let code = e.which;
        if (code === 13) {
            this.props.onAddQuestion(this.state);
            this.onClear();
        }
    }
    onClear = () => {
        this.setState({
            contentQuestion: ''
        })
    }
    render() {
        if (!this.state.isJoined) return (
            <React.Fragment>
                <EnterSessionPasswordForm location={this.props.location}></EnterSessionPasswordForm>
            </React.Fragment>
        )
        let { session, searchQuestion } = this.props;
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <InfoSession topic={session.topic} description={session.description} nameOfOwner={session.nameOfOwner} createdAt={session.createdAt}></InfoSession>
                    {(new Date(session.closedAt).getTime() - Date.now() > 0 || !session.closedAt) ? <div className="form-group">
                        <input type="text" className="form-control search" id="inputdefault" placeholder="Đặt câu hỏi..." value={this.state.contentQuestion} name="contentQuestion" onChange={this.onChange} onKeyPress={this.onKeyPress} />
                    </div> : ""}
                    <Link to={'/sessions'} type="button" className="btn btn-info mb-10">
                        <i className="fa fa-arrow-left" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i>
                        Trở về bảng phiên hỏi đáp
                    </Link>
                    <QuestionFrame session={session} searchQuestion={searchQuestion}></QuestionFrame>
                    <ScrollToTopButton></ScrollToTopButton>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        session: state.questions,
        searchQuestion: state.searchQuestion,
        hasSessionPassword: state.hasSessionPassword
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchQuestionsOfSession : (session) => {
            dispatch(actions.actFetchSessionById(session));
        },
        onAddQuestion : (question) => {
            dispatch(actions.actAddQuestionRequest(question));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
