import React, { Component } from 'react';
import callApi from '../../helpers/apiCaller';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import './style.css';
class LikeQuestionButton extends Component {
    onLike = () => {
        let id = this.props.questionId;
        callApi(`questions/like/${id}`, 'PUT').then(res => {
            this.props.onLike(id);
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        let { isLiked, likeUsers } = this.props;
        let numberOfLikes = likeUsers ? likeUsers.length : 0;
        return (
            <React.Fragment>
                <button className={isLiked ? "btn btn-default button-like liked" : "btn btn-default button-like"} onClick={this.onLike}>
                    <i className="fa fa-heart"></i>
                    <span>{numberOfLikes} Thích</span>
                </button>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLike: (questionId) => {
            dispatch(actions.actLikeQuestion(questionId));
        }
    }
}
export default connect(null, mapDispatchToProps)(LikeQuestionButton);
