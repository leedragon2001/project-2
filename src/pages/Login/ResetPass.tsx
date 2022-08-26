import React from 'react'
import logo from '../../assets/logo.png'
import forgot from "../../assets/forgot.png"
import { Formik } from 'formik'
import './ResetPass.scss'

const ResetPass = () => {
    return (
        <React.Fragment>
            <Formik
                initialValues={{ password: '' }}
                validate={values => {
                    const errors = { password: '' };
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
                    <form className='reset-container' onSubmit={handleSubmit}>
                        <div className='reset-left'>
                            <div className='reset-logo'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className='reset-input'>
                                <label className='label-reset'>Mật khẩu</label>
                                <input className='label-reset-input'
                                    type='password'
                                    placeholder="Mật khẩu"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    name="password"
                                />
                                {errors.password && touched.password && <div id="feedback-reset-password">{errors.password}</div>}
                                <label className='label-confirm'>Nhập lại mật khẩu</label>
                                <input className='label-confirm-input'
                                    type='password'
                                    placeholder="Xác nhận mật khẩu"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    name="password"
                                />
                                {errors.password && touched.password && <div id="feedback-confirm-password">{errors.password}</div>}
                            </div>

                            <button className='btn-reset' type='submit' disabled={isSubmitting} >Xác nhận</button>
                        </div>
                        <div className='reset-right'>
                            <div className='img-reset'>
                                <img src={forgot} alt="forgot" />
                            </div>
                        </div>
                    </form>)}
            </Formik>
        </React.Fragment>
    )
}

export default ResetPass