import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'
import devices from '../../assets/images/devices.png'
import social from '../../assets/images/social.png'

const Home = () => {
  return (
    <div className='container-fluid'>
      {/* Carousel wrapper */}
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        {/* Inner */}
        <div className="carousel-inner">
          {/* Single item */}
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/69903/pexels-photo-69903.jpeg"
              className="d-block w-100"
              alt="Sunset Over the City"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_760,q_75,w_1900/v1/clients/wichita-redesign/Visit_Wichita_Kansas_Wichita_Art_Museum_ab2f81d5-0500-4ccd-af3a-20835143dc89.jpg"
              className="d-block w-100"
              alt="Canyon at Nigh"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://www.imedicalapps.com/wp-content/uploads/2017/11/iStock-622206374.jpg"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        {/* Inner */}
        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel wrapper */}
      <section className="instruct">
        <h1>Create your own virtual exhibition</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquid.</p>

        <div className="instruct-row">
          <div className="instruct-col">
            <h3>1. Login</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque cum culpa recusandae maxime minus possimus ab, veritatis officiis quam placeat?</p>
          </div>
          <div className="instruct-col">
            <h3>2. Add artworks</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque cum culpa recusandae maxime minus possimus ab, veritatis officiis quam placeat?</p>
          </div>
          <div className="instruct-col">
            <h3>3. Schedule your exhibition</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque cum culpa recusandae maxime minus possimus ab, veritatis officiis quam placeat?</p>
          </div>
        </div>
      </section>
      <section className="access">
        <div className="row mb-5">
          <div className="access-col">
            <h1>Access from anywhere</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptate veritatis doloribus nihil debitis nam molestias fugit! Suscipit magni distinctio ducimus cum voluptatum repudiandae tenetur, non laborum provident iste obcaecati quae, numquam officiis soluta quia? Deserunt delectus, suscipit repellendus quia quo corporis, porro tempora voluptatibus molestias nisi eligendi sequi quam.</p>
            <Link className='exp-btn' to='/main/browseExhibition'>Explore now →</Link>
          </div>
          <div className="access-col text-center">
            <img src={social} alt="img" />
          </div>
        </div>
        <div className="row">
          <div className="access-col text-center">
            <img src={devices} alt="img" />
          </div>
          <div className="access-col">
            <h1>Compatible to all devices</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptate veritatis doloribus nihil debitis nam molestias fugit! Suscipit magni distinctio ducimus cum voluptatum repudiandae tenetur, non laborum provident iste obcaecati quae, numquam officiis soluta quia? Deserunt delectus, suscipit repellendus quia quo corporis, porro tempora voluptatibus molestias nisi eligendi sequi quam.</p>
            <Link className='exp-btn' to='/main/browseExhibition'>Explore now →</Link>
          </div>
        </div>
      </section>
    </div>

  )
  }

export default Home;