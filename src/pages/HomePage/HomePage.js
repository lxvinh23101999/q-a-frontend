import React, { Component } from 'react';
import SessionPage from '../SessionPage/SessionPage';
import SurveyPage from '../SurveyPage/SurveyPage';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "sessions"
        }
    }
    onClick = (e) => {
        e.preventDefault();
        let target = e.target;
        let name = target.name;
        this.setState({
            name: name
        })
    }
    render() {
        let { name } = this.state;
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <div className="panel panel-default">
                                <div className="panel-heading"><i className="fa fa-bars" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i> Menu</div>
                                <div className="panel-body">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li role="presentation" className={name === "sessions" ? "active" : ""}><a href="/" name="sessions" onClick={this.onClick}>Phiên hỏi đáp</a></li>
                                        <li role="presentation" className={name === "surveys" ? "active" : ""}><a href="/" name="surveys" onClick={this.onClick}>Phiên khảo sát</a></li>
                                        <li role="presentation" className={name === "admin" ? "active" : ""}><a href="/" name="admin" onClick={this.onClick}>Trang quản trị admin</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        {name === "sessions" ? <SessionPage></SessionPage> : name === "surveys" ? <SurveyPage></SurveyPage> : ""}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default HomePage;
