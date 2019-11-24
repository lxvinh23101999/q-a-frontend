import React, { Component } from 'react';
import callApi from '../../helpers/apiCaller';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
// import './style.css';
class LikeAnswerButton extends Component {
    onLike = () => {
        let id = this.props.answerId;
        let questionId = this.props.questionId;
        callApi(`answers/like/${id}`, 'PUT').then(res => {
            this.props.onLike(questionId, id);
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        let { isLiked, likeUsers } = this.props;
        let numberOfLikes = likeUsers ? likeUsers.length : 0;
        return (
            <React.Fragment>
                <button className={isLiked ? "btn btn-default btn-xs button-like liked" : "btn btn-default btn-xs button-like"} onClick={this.onLike}>
                    <i className="fa fa-heart"></i>
                    <span>{numberOfLikes} Thích</span>
                </button>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLike: (questionId, answerId) => {
            dispatch(actions.actLikeAnswer(questionId, answerId));
        }
    }
}
export default connect(null, mapDispatchToProps)(LikeAnswerButton);
