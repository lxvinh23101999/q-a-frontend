import React, { Component } from 'react';
class MyBasicInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="panel panel-default" style={{ marginTop: '40px' }}>
                    <div className="panel-heading">Thông tin cơ bản</div>
                    <div className="panel-body">
                        <p>Họ và tên: {this.props.user.name}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default MyBasicInfo;
