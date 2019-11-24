import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../helpers/apiCaller';
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
                                        ><span className="glyphicon glyphicon-log-in"></span> Login
                                        </Link>
                                    </li> : ""}
                                {!window.localStorage.getItem('isLogged') ?
                                    <li>
                                        <Link
                                            to={'/signup'}
                                        ><span className="glyphicon glyphicon-user"></span> Sign up
                                        </Link>
                                    </li> : ""}
                                {window.localStorage.getItem('isLogged') ?
                                    <li>
                                        <Link
                                            to={'/myinfo'}
                                        ><span className="fa fa-info"></span> Thông tin
                                        </Link>
                                    </li> : ""}
                                {window.localStorage.getItem('isLogged') ?
                                    <li>
                                        <a href="/" onClick={this.onLogout}
                                        ><span className="fa fa-sign-out"></span> Logout
                                        </a>
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
