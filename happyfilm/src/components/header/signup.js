import React, { Component } from 'react';
import *as  action from './../../redux/action/Action';
import _button from '../../SASS/Function/_button.scss';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

class Signup extends Component {
    local
    constructor(props) {
        super(props);
        this.state = {
            values: {
                taiKhoan: "",
                matKhau: "",
                xacNhanMK: "",
                hoTen: "",
                soDT: "",
                email: "",
                diaChi: "",
                check: "",
            },
            errors: {
                taiKhoan: "",
                matKhau: "",
                xacNhanMK: "",
                hoTen: "",
                soDT: "",
                email: "",
                diaChi: "",
                check: "",
            },
            formValid: false,
            taiKhoanValid: false,
            matKhauValid: false,
            xacNhanMKValid: false,
            hoTenValid: false,
            soDTValid: false,
            emailValid: false,
            diaChiValid: false,
            checkValid: false,
        }

    }
    handleSubmit(event) {
        event.preventDefault();
        document.getElementById("mySignUp").classList.remove("modal");
    }

    handleOnChange = (event) => {
        // console.log(event.target);
        let { name, value } = event.target;
        this.setState({
            values: { ...this.state.values, [name]: value }
        }, () => { })
    }

    handleErrors = (event) => {
        let { name, value } = event.target;
        let message = value === "" ? <Alert variant="danger">(*) Vui lòng không để trống</Alert> : <Alert variant="success">IT'S OKAY</Alert>;
        let {
            taiKhoanValid,
            matKhauValid,
            xacNhanMKValid,
            hoTenValid,
            soDTValid,
            emailValid,
            diaChiValid,
            checkValid } = this.state;

        switch (name) {
            case "taiKhoan":
                taiKhoanValid = message !== "" ? false : true;
                if (value !== "" && value.length < 4) {
                    taiKhoanValid = false;
                    message = <Alert variant="danger">(*) Vui lòng nhập nhiều hơn 4 ký tự</Alert>;
                }
                break;

            case "matKhau":
                matKhauValid = message !== "" ? false : true;
                break;
            case "xacNhanMK":
                xacNhanMKValid = message !== "" ? false : true;
                if (value !== this.state.values.matKhau) {
                    xacNhanMKValid = false;
                    message = <Alert variant="danger">(*) Xác nhận mật khẩu chưa đúng</Alert>;
                } else {
                    xacNhanMKValid = true;
                }

                break;
            case "hoTen":
                hoTenValid = message !== "" ? false : true;
                break;
            case "soDT":
                soDTValid = message !== "" ? false : true;
                break;

            case "email":
                emailValid = message !== "" ? false : true;
                if (value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    emailValid = false;
                    message = <Alert variant="danger">(*) Email của bạn chưa hợp lệ</Alert>;
                }
                break;
            case "diaChi":
                diaChiValid = message !== "" ? false : true;
                break;
            case "check":
                let checkBox = document.getElementById("invalidCheck");
                if (checkBox.checked) {
                    checkValid = true;
                } else {
                    checkValid = false;
                    message = <Alert variant="danger">(*) Mời bạn check vào ô CheckBox</Alert>;
                }
                break;
            default:
                break;
        }
        this.setState({
            errors: { ...this.state.errors, [name]: message },
            taiKhoanValid,
            matKhauValid,
            xacNhanMKValid,
            hoTenValid,
            soDTValid,
            emailValid,
            diaChiValid,
            checkValid,
        }, this.formvalidation)
    }

    formvalidation = () => {
        this.setState({
            formValid: this.state.taiKhoanValid && this.state.matKhauValid && this.state.xacNhanMKValid && this.state.hoTenValid &&
                this.state.soDTValid && this.state.emailValid && this.state.diaChiValid && this.state.checkValid
        })
    }
    render() {
        return (
            <div>
                {/* Button trigger modal */}
                <button type="button" className="myButton" data-toggle="modal" data-target="#mySignUp">
                    ĐĂNG KÝ
                </button>
                {/* Modal */}
                <div className="modal fade" id="mySignUp" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content myModal">
                            <div className="modal-header text-center">
                                <h5 className="modal-title" id="exampleModalScrollableTitle">
                                    <img src="./img/logo_happyfilm_nobg.png" alt="First slide" width="20%" height="20%" className="rounded-circle" />
                                </h5>
                            </div>
                            <div className="modal-body">
                                <div class="container">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <div className="input-group my-3 w-100">
                                                    <input type="text" name="taiKhoan" className="form-control" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} placeholder="Tài Khoản" aria-describedby="basic-addon1" />
                                                </div>
                                                
                                            </div>
                                            <div className="ValidationErr" style={{ visibility: this.state.errors.taiKhoan !== "" ? "visible" : "hidden" }}>{this.state.errors.taiKhoan}
                                                </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <div className="input-group mb-3 w-100">
                                                            <input type="password" name="matKhau" className="form-control" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} placeholder="Mật khẩu" aria-describedby="basic-addon1" />
                                                        </div>
                                                        <div className="ValidationErr" style={{ visibility: this.state.errors.matKhau !== "" ? "visible" : "collapse" }}>{this.state.errors.matKhau}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <div className="input-group mb-3 w-100">
                                                            <input type="password" name="xacNhanMK" className="form-control" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} placeholder="Xác nhận mật khẩu" aria-describedby="basic-addon1" />
                                                        </div>
                                                        <div>
                                                            {this.state.errors.xacNhanMK !== "" ? <div className="ValidationErr">{this.state.errors.xacNhanMK}</div> : ""}                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3 w-100">
                                                    <input type="text" name="hoTen" className="form-control" placeholder="Họ tên" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} aria-describedby="basic-addon1" />
                                                </div>
                                                <div>
                                                    {this.state.errors.hoTen !== "" ? <div className="ValidationErr">{this.state.errors.hoTen}</div> : ""}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <div className="input-group mb-3 w-100">
                                                            <input type="text" name="soDT" className="form-control" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} placeholder="Số điện thoại" aria-describedby="basic-addon1" />
                                                        </div>
                                                        <div>
                                                            {this.state.errors.soDT !== "" ? <div className="ValidationErr">{this.state.errors.soDT}</div> : ""}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div class="form-group">
                                                        <select class="custom-select" name="gioiTinh" id="">
                                                            <option>Nam</option>
                                                            <option>Nữ</option>
                                                            <option>Khac</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3 w-100">
                                                    <input type="text" name="email" className="form-control" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} placeholder="Email" aria-describedby="basic-addon1" />
                                                </div>
                                                <div>
                                                    {this.state.errors.email !== "" ? <div className="ValidationErr">{this.state.errors.email}</div> : ""}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3 w-100">
                                                    <input type="text" name="diaChi" className="form-control" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} placeholder="Địa chỉ" aria-describedby="basic-addon1" />
                                                </div>
                                                <div>
                                                    {this.state.errors.diaChi !== "" ? <div className="ValidationErr">{this.state.errors.diaChi}</div> : ""}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="check"
                                                        id="invalidCheck"
                                                        onClick={this.handleErrors}
                                                    />
                                                    <label className="form-check-label" htmlFor="invalidCheck">
                                                        Tôi đã đọc và đồng ý CHÍNH SÁCH của chương trình
                                                    </label>
                                                    <div>
                                                        {this.state.errors.check !== "" ? <div className="ValidationErr" style="display: block">{this.state.errors.check}</div> : ""}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-warning container" data-toggle="modal" data-target="#Submit" disabled={!this.state.formValid} >ĐĂNG KÝ</button>
                                            <div>
                                                <div
                                                    className="modal fade"
                                                    id="Submit"
                                                    tabIndex={-1}
                                                    role="dialog"
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-body">Chuc mung ban da dang ky thanh cong</div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary container"
                                                                    data-dismiss="modal"
                                                                >
                                                                    Trang chu
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: user => {
            dispatch(action.actsingUp(user))
        }
    }
}


export default connect(null, mapDispatchToProps)(Signup);
