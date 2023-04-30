import React from 'react';
import { NavLink } from 'react-router-dom'
import signUpImg from '../../assets/images/SignUp.jpg'
import './Signup.css';
import { useFormik } from 'formik';
import { signupschema } from '../../validationSchema';
import Swal from 'sweetalert2';
import app_config from '../../config';

const initialValues = {
  name: "",
  email: "",
  password: "",
  c_password: ""
}

const Signup = () => {
  const url = app_config.apiurl;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signupschema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);


      const res = await fetch(url + '/user/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      console.log(res.status);
      if (res.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You have registered successfully'
        })
        resetForm();
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }

    }
  })

  return (
    <>
      <section className="signup">
        <div className="imgBx">
          <img src={signUpImg} alt="image"
          />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Register here</h2>

            <form onSubmit={handleSubmit}>
              <div className="inputBx">
                <span>Username</span>
                <input type="text" name='name' id='name' autoComplete='off' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {errors.name && touched.name ?
                  <p className='text-danger form-error'>{errors.name}</p>
                  : null
                }
              </div>
              <div className="inputBx">
                <span>Email Address</span>
                <input type="email" name='email' id='email' autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.email && touched.email ?
                <p className='text-danger form-error'>{errors.email}</p>
                : null
              }
              <div className="inputBx">
                <span>Password</span>
                <input type="password" name='password' id='password' autoComplete='off' value={values.password} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.password && touched.password ?
                <p className='text-danger form-error'>{errors.password}</p>
                : null
              }
              <div className="inputBx">
                <span>Confirm Password</span>
                <input type="password" name='c_password' id='c_password' autoComplete='off' value={values.c_password} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.c_password && touched.c_password ?
                <p className='text-danger form-error'>{errors.c_password}</p>
                : null
              }
              <div className="remember">
                <label><input type="checkbox" />Remember me</label>
              </div>
              <div className="inputBx">
                <input type="submit" value="Sign up" />
              </div>
              <div className="inputBx">
                <p>Don't have an account? <NavLink className='h-link' to='/main/signin'>Sign in</NavLink></p>
              </div>
            </form>
            <h3>Login with social media</h3>
            <ul className="sci">
              <li><i class="fab fa-facebook-f fa-2x "></i></li>
              <li><i class="fab fa-twitter fa-2x "></i></li>
              <li><i class="fab fa-instagram fa-2x "></i></li>
            </ul>
          </div>
        </div>
      </section>

    </>
  );
}

export default Signup;