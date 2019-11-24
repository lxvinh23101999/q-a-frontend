import React, { Component } from 'react';
import callApi from '../../helpers/apiCaller';
// import Swal from 'sweetalert2';
class EnterSessionPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            error: '',
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
        let id = parseInt(this.props.location.pathname.split('/')[2]);
        callApi(`sessions/joinsession/${id}`, 'POST', this.state).then(res => {
            window.location.reload();
        }).catch(err => {   
            this.setState({
                error: err.response.data
            })
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="panel panel-default" style={{ marginTop: '40px' }}>
                        <div className="panel-heading"><h4>Vui lòng nhập mật khẩu để tiếp tục</h4></div>
                        <div className="panel-body text-center">
                            <input className="form-control input-lg" id="inputlg" type="password" style={{marginBottom: '25px'}} value={this.state.password} name="password" onChange={this.onChange} />
                            {this.state.error ? <p style={{ color: 'red', marginTop: '5px' }}><i>{this.state.error}</i></p> : ''}
                            <button type="button" className="btn btn-primar btn-lg" onClick={this.onClick}><i className="fa fa-angle-double-right" aria-hidden="true"></i> Tiếp tục <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default EnterSessionPasswordForm;
