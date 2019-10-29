import React, { Component } from 'react';
class NotFoundPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="alert alert-warning">
                        <strong>Không Tìm Thấy Trang</strong>
                    </div>
                </div>
            </React.Fragment>
        );      
    }
}
export default NotFoundPage;
