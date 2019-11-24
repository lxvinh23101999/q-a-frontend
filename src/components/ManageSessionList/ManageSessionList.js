import React, { Component } from 'react';
import { connect } from 'react-redux';     
import ManageSessionItem from '../ManageSessionItem/ManageSessionItem';
class ManageSessionList extends Component {
    render() {
        let { manageSessions } = this.props;
        let elmSessions = manageSessions.map((session, index) => {
            return <ManageSessionItem key={session.id} index={index + 1} session={session}></ManageSessionItem>
        });
        return (
            <React.Fragment>
                <table className="table table-bordered tabel-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Chủ đề</th>
                            <th className="text-center">Mô tả</th>
                            <th className="text-center">Người tạo</th>
                            <th className="text-center">Trạng thái</th>
                            <th className="text-center">Ngày tạo</th>
                            <th className="text-center">Ngày đóng</th>
                            <th className="text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elmSessions}
                    </tbody>
                </table>
                {/* {elmUsers.length === 0 ? <p style={{color: 'red'}}><i>Không tìm thấy kết quả phù hợp</i></p> : ""} */}
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        manageSessions: state.manageSessions,
    }
};
export default connect(mapStateToProps, null)(ManageSessionList);
