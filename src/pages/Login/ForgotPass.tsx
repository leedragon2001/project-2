import React from 'react'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import forgot from "../../assets/forgot.png"

import './ForgotPass.scss'

const ForgotPass = () => {
    let navigate = useNavigate()
    return (
        <React.Fragment>
            <Formik
                initialValues={{ email: '' }}
                validate={values => {
                    const errors = { email: '' };
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
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
                    <form className='forgot-container' onSubmit={handleSubmit}>
                        <div className='forgot-left'>
                            <div className='forgot-logo'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className='forgot-input'>
                                <p className='forgot-text'>Đặt lại mật khẩu</p>
                                <label className='label-email'>Vui lòng nhập email để đặt lại mật khẩu của bạn *</label>
                                <input className="label-email-input"
                                    type='email'
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    name="email"
                                />
                                {errors.email && touched.email && <div id="feedback-email">{errors.email}</div>}

                            </div>
                            <div className='btn-forgot'>
                                <button className='btn-forgot-cancel' type='button' onClick={() => navigate(-1)}>Hủy</button>
                                <button className='btn-forgot-continue' type='submit' disabled={isSubmitting} onClick={() => navigate("/reset")}>Tiếp tục</button>
                            </div>
                        </div>
                        <div className='forgot-right'>
                            <div className='img-forgot'>
                                <img src={forgot} alt="forgot" />
                            </div>
                        </div>
                    </form>)}
            </Formik>
        </React.Fragment>
    )
}

export default ForgotPass