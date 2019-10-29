import React, { Component } from 'react';
class QuestionFrame extends Component {
    render() {
        return (
            // idQuestion, contentQuestion, Đăng bởi ai, Thời gian đăng.
            <React.Fragment>
                <div className="media itembg-color2 pd-15 mb-20">
                    <div className="media-left">
                        <img src="https://www.w3schools.com/bootstrap/img_avatar4.png" alt="answer" className="media-object" style={{ width: 45 + 'px' }} />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">John Doe <small><i>Posted on February 19, 2016</i></small></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default QuestionFrame;
