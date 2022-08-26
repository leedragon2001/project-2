import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import logo from '../../assets/logo.png'
import login from "../../assets/login.png"
import './Login.scss'

const Login = () => {
    let navigate = useNavigate()
    return (
        <React.Fragment>
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={values => {
                    const errors = { username: '', password: '' };
                    if (!values.username) {
                        errors.username = 'Required';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 1000);
                }}>
                {({ values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form className='login-container' onSubmit={handleSubmit}>
                        <div className='login-left'>
                            <div className='login-logo'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className='login-input'>
                                <label className='label-username'>Tên đăng nhập *</label>
                                <input className="label-username-input"
                                    type='text'
                                    placeholder="Tên đăng nhập"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    name="username"
                                />
                                {errors.username && touched.username && <div id="feedback-username">{errors.username}</div>}
                                <label className='label-password'>Mật khẩu *</label>
                                <input className='label-password-input'
                                    type='password'
                                    placeholder="Mật khẩu"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    name="password"
                                />
                                {errors.password && touched.password && <div id="feedback-password">{errors.password}</div>}
                            </div>
                            <a className='link-forgot' onClick={() => navigate("/forgot")}>Quên mật khẩu?</a>
                            <button className='btn-login' type='submit' disabled={isSubmitting} onClick={() => navigate("/menu")}>Đăng nhập</button>
                        </div>
                        <div className='login-right'>
                            {/* <div className='text-hethong'>Hệ thống</div>
                        <div className='text-quanlixephang'>QUẢN LÝ XẾP HÀNG</div> */}
                            <div className='img-login'>
                                <img src={login} alt="login" />
                            </div>
                        </div>
                    </form>)}
            </Formik>
        </React.Fragment>
    )
}

export default Login