import React, { useState } from 'react'
import './UserProfile.css'
import { useFormik } from 'formik'

const UserProfile = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  const [edit, setEdit] = useState('true')

  const initialValues = {
    title: "",
    discription: "",
    artist: user._id,
    price: ""
  }

  console.log(user);
  return (
    <>
      <div className="profileBx">
        <div className="userImg">
          <img src="https://tse3.mm.bing.net/th?id=OIP.gtedt4wDkBFqRkh0o8KRqAHaHa&pid=Api&P=0" alt="profile pic" />
          <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>{user.name}</li>
          </ul>
          <ul className='profile-icons'>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
          </ul>
          <span>Note: Connect with us on out social media accounts for more informations and updates</span>
        </div>
        <div className="abtUser">
          <h1>Profile</h1>
          <form className='profileEditBox'>
            <div class="row justify-content-md-center">
              <div className="inputBx col-lg-6">
                <span>Name</span>
                <input type="text" name='name' id='name' autoComplete='off' value={user.name} disabled='{edit}' />
              </div>
              <div className="inputBx col-lg-6">
                <span>Email Address</span>
                <input type="email" name='email' id='email' autoComplete='off' value={user.email} />
              </div>
            </div>
            <div class="row justify-content-md-center">
              <div className="inputBx col-lg-6">
                <span>Role</span>
                <input type="text" name='title' id='title' autoComplete='off' value={user.role} />
              </div>
              <div className="inputBx col-lg-6">
                <span>Date</span>
                <input type="email" name='title' id='title' autoComplete='off' value={user.created_at} />
              </div>
            </div>
            <div class="row ">
              <div className="btnBx col">
                <input type="reset" value='Edit' />
                <input type="submit" value='Save' />
              </div>
              {/* <div className="inputBx col">
                <input type="submit" value='Save' />
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserProfile