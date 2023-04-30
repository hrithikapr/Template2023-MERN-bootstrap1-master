import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { contactUSschema } from '../../validationSchema';
import { useFormik } from 'formik';

const initialValues = {
  name: "",
  email: "",
  msg: ""
}

const Contact = () => {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: contactUSschema,
    onSubmit: (values, action) => {
      console.log("Form values: ", values);

      action.resetForm()
    }
  })
  return (
    <div className='container-fluid'>
      <div className="contactHeader-block">
        <div className="contHead">
          {/* <h1 className='d-none d-md-block'>Connect with us</h1> */}
          <div className="d-none d-md-block">
            <Typewriter
              options={{
                wrapperClassName: 'animateContHead',
                cursorClassName: 'cursorAnimate',
                skipAddStyles: false,
                strings: [`Connect with us`, 'How can we help?'],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 110
              }}
            />
            <p className='d-none d-md-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia quo quibusdam tempora adipisci, culpa laboriosam expedita dolore quae dolores consequuntur vitae facilis corrupti totam debitis recusandae unde quidem dicta?</p>
          </div>
          <div className="cont-area">
            <Link className='contbtn d-inline-block' to='/main/home'>Explore more </Link>
            <a className='contbtn d-inline-block' smooth href='#form'>Contact us <span>&#x27F6;</span></a>
          </div>
        </div>
        <div className="social-icons d-none d-sm-block">
          <a href="#!"><i class="fab fa-facebook-square fa-2x "></i></a>
          <a href="#!"><i class="fab fa-instagram fa-2x "></i></a>
          <a href="#!"><i class="fab fa-twitter fa-2x "></i></a>

        </div>
      </div>
      <section className="contact">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis accusantium obcaecati, tempore deserunt repellendus. Vel          voluptatibus possimus unde fuga doloremque assumenda consectetur natus ducimus officia harum? Vel rem, dolore culpa, ipsum quam  inventore vitae quasi dolor maxime tenetur laborum itaque veniam laudantium laboriosam sit facilis sapiente aperiam, deserunt quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, asperiores quis praesentium inventore repellat voluptatibus ullam cumque sequi quasi velit non suscipit illo explicabo, eos eum rem molestiae. Assumenda nemo autem explicabo possimus ad nobis ullam voluptatibus dolores, odit accusantium atque quasi corrupti saepe aliquid.</p>
        </div>

        <div className="contactContainer">
          <div className="contactInfo">
            <div className="contactBox">
              <div className="contact-icons"><i class="fas fa-map-marker-alt"></i></div>
              <div className="contact-text">
                <h3>Address</h3>
                <p>548P/26 Manak Nagar,<br />Alambagh, Lucknow <br />226011</p>
              </div>
            </div>
            <div className="contactBox">
              <div className="contact-icons"><i class="fas fa-phone"></i></div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>552-22888846</p>
              </div>
            </div>
            <div className="contactBox">
              <div className="contact-icons"><i class="fas fa-envelope"></i></div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>vrmuseum@example.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form onSubmit={handleSubmit} id='form'>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name='name' id='name'
                  autoComplete='off'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required />
                <span>Full Name</span>
              </div>
              {errors.name && touched.name ?
                <span className='text-danger form-error'>{errors.name}</span>
                : null
              }
              <div className="inputBox">
                <input type="email" name='email' id='email'
                  autoComplete='off'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required />
                <span>Email</span>
              </div>
              {errors.email && touched.email ?
                <span className='text-danger form-error'>{errors.email}</span>
                : null
              }
              <div className="inputBox">
                <textarea name="msg" id="msg" cols="30" rows="10" autoComplete='off'
                  value={values.msg}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required></textarea>
                <span>Type your Message...</span>
              </div>
              {errors.msg && touched.msg ?
                <span className='text-danger form-error'>{errors.msg}</span>
                : null
              }
              <div className="inputBox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact