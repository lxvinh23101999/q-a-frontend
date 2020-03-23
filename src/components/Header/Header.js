import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../helpers/apiCaller';
import './header.css';
class Header extends Component {
    onLogout = (e) => {
        e.preventDefault();
        callApi(`users/logout`, 'POST', null).then(res => {
            window.localStorage.removeItem('isLogged');
            window.location.href = "http://localhost:3000/login";
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/">Q&A UET</a>
                                {/* <ul className="nav navbar-nav">
                                    <li className="active">
                                        <Link
                                            to={'/'}
                                        >Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={'/admin'}
                                        >Admin
                                        </Link>
                                    </li>
                                </ul> */}
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                {!window.localStorage.getItem('isLogged') ?
                                    <li>
                                        <Link
                                            to={'/login'}
                                        ><span className="glyphicon glyphicon-log-in"></span> Đăng nhập
                                        </Link>
                                    </li> : ""}
                                {!window.localStorage.getItem('isLogged') ?
                                    <li>
                                        <Link
                                            to={'/signup'}
                                        ><span className="glyphicon glyphicon-user"></span> Đăng ký
                                        </Link>
                                    </li> : ""}
                                {window.localStorage.getItem('isLogged') ?
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="/" style={{fontSize: '20px'}}>
                                    <span className="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link
                                                    to={'/myinfo'}
                                                ><span className="fa fa-info"></span> Thông tin
                                            </Link>
                                            </li>
                                            <li>
                                                <a href="/" onClick={this.onLogout}
                                                ><span className="fa fa-sign-out"></span> Đăng xuất
                                            </a>
                                            </li>
                                        </ul>
                                    </li> : ""}

                            </ul>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}
export default Header;
