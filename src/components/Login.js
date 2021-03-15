import React from 'react'
import {Link} from 'react-router-dom'

function Login(){
    return (
        <div className="account-body accountbg">
            {/* Log In page */}
            <div className="row vh-100 bg-city">
                <div className="col-12 align-self-center">
                    <div className="auth-page">
                        <div className="card auth-card shadow-lg">
                            <div className="card-body">
                                <div className="px-3">
                                    <div className="auth-logo-box">
                                        <Link to="/" className="logo logo-admin"><img src="./assets/images/logo_codeo.png" height={55} alt="logo" className="auth-logo" /></Link>
                                    </div>{/*end auth-logo-box*/}
                                    <div className="text-center auth-logo-text">
                                        <h4 className="mt-0 mb-3 mt-5">Login</h4>
                                        <p className="text-muted mb-0" />
                                    </div>{/*end auth-logo-text*/}
                                    <form className="form-horizontal auth-form my-4" action="index.html">
                                        <div className="form-group">
                                            <label htmlFor="username">Email</label>
                                            <div className="input-group mb-3">
                                                <span className="auth-form-icon">
                                                            <i className="dripicons-mail" /> 
                                                        </span>
                                                <input type="text" className="form-control frm-new" id="username" placeholder="Enter email" />
                                            </div>
                                        </div>{/*end form-group*/}
                                        <div className="form-group">
                                            <label htmlFor="userpassword">Password</label>
                                            <div className="input-group mb-3">
                                                <span className="auth-form-icon">
                                                            <i className="dripicons-lock" /> 
                                                        </span>
                                                <input type="password" className="form-control frm-new" id="userpassword" placeholder="Enter password" />
                                            </div>
                                        </div>{/*end form-group*/}
                                        <div className="form-group  mb-0 row mt-4">
                                            <div className="col-sm-12 text-right">
                                                <Link to="/recover" className="text-muted font-13"><i className="dripicons-lock" /> Forgot password?</Link>
                                            </div>
                                            {/*end col*/}
                                        </div>
                                        {/*end form-group*/}
                                    </form>
                                </div>
                                {/*end form-group*/}
                                <div className="form-group mb-0 row">
                                    <div className="col-12 mt-2" align="center">
                                        <button className="btn btn-primary btn-round btn-block waves-effect waves-light" type="submit" style={{width: '94%'}}>Login <i className="fas fa-sign-in-alt ml-1" /></button>
                                    </div>{/*end col*/}
                                </div> {/*end form-group*/} {/*end form*/}
                            </div>{/*end /div*/}
                            <div className="account-social text-center">
                                <h6 className="my-4">Or Login With</h6>
                                <ul className="list-inline mb-4">
                                    <li className="list-inline-item">
                                        <a href className>
                                            <i className="fab fa-facebook-f facebook" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href className>
                                            <i className="fab fa-twitter twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href className>
                                            <i className="fab fa-google google" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>{/*end card-body*/}
                    </div>{/*end card*/}
                </div>{/*end auth-page*/}
                <div align="center" style={{width: '100%'}}>
                    <span align="center">
                        ©2020 Five Angel Investment Limited - BVI
                    </span>
                </div>
            </div>
            {/*end col*/} 
            {/*end row*/} 
            {/* End Log In page */}
        </div>
    );
}

export default Login;