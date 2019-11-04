import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import AnswerItem from '../AnswerItem/AnswerItem';
import InputAnswer from '../InputAnswer/InputAnswer';
// import Loader from '../Loader/Loader';
class QuestionItem extends Component {
    onClick = (event) => {
        event.preventDefault();
        this.props.onChangeIsDisplayAnswer(this.props.index);
    }
    
    render() {
        let { question, index, isDisplayAnswer } = this.props;
        let elmAnswers = [];
        if (isDisplayAnswer[index-1]) {
            elmAnswers.push(<InputAnswer key={index-1}></InputAnswer>);
            elmAnswers.push(<AnswerItem></AnswerItem>);
            elmAnswers.push(<AnswerItem></AnswerItem>);
            elmAnswers.push(<AnswerItem></AnswerItem>);
            elmAnswers.push(<div><i className="fa fa-chevron-circle-down more" aria-hidden="true">Xem thêm</i></div>);
        }
        else elmAnswers = [];
        return (
            // idQuestion, contentQuestion, Đăng bởi ai, Thời gian đăng.
            <React.Fragment>
                <div className="media mb-30 itembg-color pd-15">
                    <div className="media-left">
                        <img src="https://www.w3schools.com/bootstrap/img_avatar3.png" alt="anh" className="media-object anh" />
                    </div>
                    <div className="media-body">
                        <div className="row">
                            <h4 className="media-heading col-xs-11 col-sm-11 col-md-11 col-lg-11">
                                <Link
                                    to={'/'}
                                    className="question-content"
                                >Câu hỏi: {question.contentQuestion}
                                </Link>
                                {/* <span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span> */}
                            </h4>
                        </div>
                        <Link
                            to={'/'}
                            className="question-user"
                        >Đăng bởi: {question.user}
                        </Link>
                        <p className="question-number">Số câu trả lời: {question.numberOfAnswers}<a href="/" onClick={this.onClick}>Trả lời</a></p>
                        <hr />
                        {elmAnswers}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplayAnswer : state.isDisplayAnswer
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeIsDisplayAnswer : (index) => {
            dispatch(actions.changeIsDisplayAnswer(index));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionItem);
