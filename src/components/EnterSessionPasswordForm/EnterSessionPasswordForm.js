import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Swal from 'sweetalert2';
// import * as actions from '../../actions/index';
class EnterSessionPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }
    onClick = () => {

    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="panel panel-default" style={{ marginTop: '40px' }}>
                        <div className="panel-heading"><h4>Vui lòng nhập mật khẩu để tiếp tục</h4></div>
                        <div className="panel-body text-center">
                            <input className="form-control input-lg" id="inputlg" type="password" style={{marginBottom: '25px'}} value={this.state.password} name="password" onChange={this.onChange} />
                            <button type="button" className="btn btn-primar btn-lg" onClick={this.onClick}><i className="fa fa-angle-double-right" aria-hidden="true"></i> Tiếp tục <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onCheck: (password) => {
            
        }
    }
}
export default connect(null, mapDispatchToProps)(EnterSessionPasswordForm);
