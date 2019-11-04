import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/">WebSiteName</a>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                {/* <li><a href="/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li> */}
                                <li>
                                    <Link
                                        to={'/login'}
                                    ><span className="glyphicon glyphicon-log-in"> Login</span> 
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}
export default Header;
