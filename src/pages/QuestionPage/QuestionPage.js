import React, { Component } from 'react';
import InfoSession from '../../components/InfoSession/InfoSession';
import QuestionFrame from '../../components/QuestionFrame/QuestionFrame';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import EnterSessionPasswordForm from '../../components/EnterSessionPasswordForm/EnterSessionPasswordForm';
class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionId: '',
            contentQuestion: '',
        }
    }
    componentDidMount() {
        const { match } = this.props;
        this.props.fetchQuestionsOfSession(match.params.id);
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
        let { session, searchQuestion } = this.props;
        // if (hasSessionPassword) return (
        //     <React.Fragment>
        //         <EnterSessionPasswordForm></EnterSessionPasswordForm>
        //     </React.Fragment>
        // )
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <InfoSession topic={session.topic} description={session.description} nameOfOwner={session.nameOfOwner} createdAt={session.createdAt}></InfoSession>
                    {(new Date(session.closedAt).getTime() - Date.now() > 0 || !session.closedAt) ? <div className="form-group">
                        <input className="form-control search" id="inputdefault" type="text" placeholder="Đặt câu hỏi..." value={this.state.contentQuestion} name="contentQuestion" onChange={this.onChange} onKeyPress={this.onKeyPress} />
                    </div> : ""}
                    <Link to={'/'} type="button" className="btn btn-info mb-10">
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
        fetchQuestionsOfSession : (id) => {
            dispatch(actions.actFetchSessionByIdRequest(id));
        },
        onAddQuestion : (question) => {
            dispatch(actions.actAddQuestionRequest(question));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
