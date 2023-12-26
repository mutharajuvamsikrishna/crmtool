import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserRegister } from './Services/Api';

const Register = () => {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      ename: '',
      mob: '',
      password: '',
      cnpassword: '',
      showPassword: false,
      showPassword1: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      ename: Yup.string().matches(/^[a-zA-Z\s]*$/, 'Name should contain only alphabets').required('Name is required'),
      mob: Yup.string().matches(/^\d{10}$/, 'Invalid mobile number').required('Mobile number is required'),
      password: Yup.string() .required('Password is required'),
      cnpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async (values) => {
      try {
       
        if (!values.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*&@#]).{6,}/)) {
          alert("Password Should Minimum 6 Digits,Should have at least one uppercase and  Lowercase,One Numeric And Special Symbols Like @,&,*,#")
          return;
        }
        setLoading(true)
       
     const response=   await UserRegister(values);
        if (response.data === "otp1") {

          navigate("/otp", { state: { data: values } }); // Use navigate to change the route
          
                  } else {
                    navigate("/regfail");
                  }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const setResponse = () => {
    formik.setFieldValue('showPassword', !formik.values.showPassword);
  };

  const setResponse1 = () => {
    formik.setFieldValue('showPassword1', !formik.values.showPassword1);
  };
  if (loading) {
    return <div style={{paddingTop:"18%",color:"green"}}><h1 className='text-center'>Sending OTP.....</h1></div>;
  }
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: "100vh" }}>
      <div style={{ paddingTop: "4%" }}>
        <h2 className='text-center' style={{ color: 'blue' }}>Sign Up for CRM System</h2>
      </div>
      <div style={{ paddingTop: "1%" }}>
        <center>
          <form onSubmit={formik.handleSubmit}>
            <table cellPadding={20}>
              <tbody>
                <tr className='addmore1'>
                  <td>Email</td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      placeholder='Enter Email'
                      className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ width: "300px" }}
                      required
                    />
                    {formik.touched.email && formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
                  </td>
                </tr>
                <tr className='addmore1'>
                  <td>Name</td>
                  <td>
                    <input
                      type="text"
                      name="ename"
                      placeholder='Enter Name'
                      className={`form-control ${formik.touched.ename && formik.errors.ename ? 'is-invalid' : ''}`}
                      value={formik.values.ename}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ width: "300px" }}
                      required
                    />
                    {formik.touched.ename && formik.errors.ename && <div className="invalid-feedback">{formik.errors.ename}</div>}
                  </td>
                </tr>
                <tr className='addmore1'>
                  <td>Mobile Number</td>
                  <td>
                    <input
                      type="text"
                      name="mob"
                      placeholder='Enter Mobile Number'
                      className={`form-control ${formik.touched.mob && formik.errors.mob ? 'is-invalid' : ''}`}
                      value={formik.values.mob}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ width: "300px" }}
                      required
                    />
                    {formik.touched.mob && formik.errors.mob && <div className="invalid-feedback">{formik.errors.mob}</div>}
                  </td>
                </tr>
                <tr className='addmore1'>
                  <td>Password</td>
                  <td>
                    <input
                      type={formik.values.showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder='Enter Password'
                      className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ width: "300px" }}
                      required
                      
                    />
                    {formik.touched.password && formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
                  </td>
                  <td>
                    <button
                      type="button"
                      style={{ height: "40px", width: "60px", border: "2px solid #3498db" }}
                      className='btn btn-'
                      onClick={setResponse}
                    >
                      {formik.values.showPassword ? 'Hide' : 'Show'}
                    </button>
                  </td>
                </tr>
                <tr className='addmore1'>
                  <td>Confirm Password</td>
                  <td>
                    <input
                      type={formik.values.showPassword1 ? 'text' : 'password'}
                      name="cnpassword"
                      placeholder='Enter Confirm Password'
                      className={`form-control ${formik.touched.cnpassword && formik.errors.cnpassword ? 'is-invalid' : ''}`}
                      value={formik.values.cnpassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ width: "300px" }}
                      required
                    />
                    {formik.touched.cnpassword && formik.errors.cnpassword && <div className="invalid-feedback">{formik.errors.cnpassword}</div>}
                  </td>
                  <td>
                    <button
                      type="button"
                      style={{ height: "40px", width: "60px", border: "2px solid #3498db" }}
                      className='btn btn-'
                      onClick={setResponse1}
                    >
                      {formik.values.showPassword1 ? 'Hide' : 'Show'}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <button className='btn btn-primary' type='submit'>Submit</button>
          </form>
          <br />
          <Link to="/login" style={{ color: "blue" }}>Login, if you have an account!</Link>
        </center>
      </div>
      <br/><br/>
    </div>
  );
};

export default Register;
