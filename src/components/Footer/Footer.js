import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Footer */}
                <footer className="page-footer">

                    {/* Footer Links */}
                    <div className="container mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-6 ">
                                {/* Content */}
                                <h6 className="text-uppercase font-weight-bold">Nhóm 7</h6>
                                <div className="after">
                                    <ul className="list-member">
                                        <li>Phạm Thanh Tùng</li>
                                        <li>Lê Xuân Vinh</li>
                                        <li>Nguyễn Mạnh Thắng</li>
                                        <li>Phạm Văn Thành</li>
                                        <li>Nguyễn Ngọc Sơn</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* Links */}
                                <h6 className="text-uppercase font-weight-bold">Liên hệ</h6>
                                <div className="after">
                                    <ul>
                                        <li><i className="fa fa-home" aria-hidden="true"></i>30 Hồ Tùng Mậu, Hà Nội, Việt Nam</li>
                                        <li><i className="fa fa-envelope-open-o" aria-hidden="true"></i>nguyenmanhthang@gmail.com</li>
                                        <li><i className="fa fa-phone" aria-hidden="true"></i>(+84) 123456789</li>
                                        <li></li>
                                        <li><i className="fa fa-github" aria-hidden="true"></i><a href="https://github.com/sonbeo1999hd">https://github.com/manhthang</a></li>
                                        <li><i className="fa fa-facebook" aria-hidden="true"></i><a href="https://www.facebook.com/voi.thgtt12">manhthang0cm</a></li>
                                    </ul>
                                </div>

                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                    {/* Footer Links */}
                    {/* Copyright */}
                    <div className="footer-copyright text-center py-3">© 2019 Copyright</div>
                    {/* Copyright */}
                </footer>
                {/* Footer */}
            </React.Fragment>

        );
    }
}
export default Footer;
