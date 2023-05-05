import { useFormik } from 'formik';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import signInImg from '../../assets/images/SignIn.jpg'
import { signinschema } from '../../validationSchema';
import './Signup.css';
import Swal from 'sweetalert2';
import { useUserContext } from '../../context/UserProvider';

const initialValues = {
  email: "",
  password: ""
}

const Signin = () => {

  const navigate= useNavigate();

  const {setLoggedIn}  = useUserContext();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signinschema,
    onSubmit: async (values, { resetForm }) => {
      console.log("Form values: ", values);
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      console.log(res.status);
      if (res.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Login Success'
        })
        const data = (await res.json()).result;
        sessionStorage.setItem('user', JSON.stringify(data))
        setLoggedIn(true);
        navigate('/user/profile');
        resetForm();
      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Login Failed'
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
      resetForm()
    }
  })
return (
  <>
    <section className="signup">
      <div className="imgBx">
        <img src={signInImg} alt="image" />
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="remember">
              <label><input type="checkbox" />Remember me</label>
            </div>
            <div className="inputBx">
              <input type="submit" value="Sign in" />
            </div>
            <div className="inputBx">
              <p>Don't have an account? <NavLink className='h-link' to='/main/signup'>Sign up</NavLink></p>
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

export default Signin;