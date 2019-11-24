import React, { Component } from 'react';
import UserFrame from '../../components/UserFrame/UserFrame';
import { Link } from 'react-router-dom';
import ManageSessionFrame from '../../components/ManageSessionFrame/ManageSessionFrame';
import ManageSurveyFrame from '../../components/ManageSurveyFrame/ManageSurveyFrame';
class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "users"
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
                <div className="container">
                    <Link to={'/'} type="button" className="btn btn-info"  style={{ marginBottom: '30px' }}>
                        <i className="fa fa-arrow-left" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i>
                        Trở về trang chủ
                    </Link>
                    <ul className="nav nav-tabs">
                        <li role="presentation" className={name === "users" ? "active" : ""}><a href="/" name="users" onClick={this.onClick}>Quản lý người dùng</a></li>
                        <li role="presentation" className={name === "sessions" ? "active" : ""}><a href="/" name="sessions" onClick={this.onClick}>Quản lý phiên hỏi đáp</a></li>
                        <li role="presentation" className={name === "surveys" ? "active" : ""}><a href="/" name="surveys" onClick={this.onClick}>Quản lý phiên khảo sát</a></li>
                    </ul>

                    {name === "users" ? <UserFrame></UserFrame> : name === "sessions" ? <ManageSessionFrame></ManageSessionFrame> : <ManageSurveyFrame></ManageSurveyFrame>}
                </div>
            </React.Fragment>
        );
    }
}
export default AdminPage;
