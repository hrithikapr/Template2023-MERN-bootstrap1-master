import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'
import './BrowserExhibition.css'
import { Link } from 'react-router-dom'

const BrowseExhibition = () => {

  const [arts, setArts] = useState(JSON.parse(sessionStorage.getItem('art')));

  

  return (
    <div>
      <div className="browse-header-block">
        <div className="browseHead">
          <Typewriter
            options={{
              wrapperClassName: 'animateContHead',
              cursorClassName: 'cursorAnimate',
              skipAddStyles: false,
              strings: [`Experiance virtual reality`, 'Take a tour of virtual meusium'],
              autoStart: true,
              loop: true,
              delay: 100,
              // pauseFor: 50,
              deleteSpeed: 100
            }}
          />
          <p className='d-none d-md-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia quo quibusdam tempora adipisci, culpa laboriosam expedita dolore quae dolores consequuntur vitae facilis corrupti totam debitis recusandae unde quidem dicta?</p>
        </div>
      </div>
      <div className="head1 text-center mt-3 mb-3">
        <h1>Access the tours</h1>
      </div>
      <div className="container-fluid card-content row mt-3 mb-5">
        <section className="card-field m-auto">
          <div className="card-box col-12 col-sm-12 mt-2">
            <div className="imgBx">
              <img src="https://i.redd.it/k9oi1kaibwl41.jpg" alt="img" />
            </div>
            <div className="content">
              <h2>Title one</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur delectus eum incidunt. Beatae accusamus quod nam nihil quidem? Laboriosam suscipit similique corrupti vel mollitia assumenda laudantium dicta quae dolore corporis?.</p>
              <span>₹100</span>
              <Link className='btn-tour' to='!#'>Take a tour <i class="fas fa-arrow-right"></i></Link>
            </div>
          </div>
          <div className="card-box col-12 col-sm-12 mt-2">
            <div className="imgBx">
              <img src="https://tse4.mm.bing.net/th?id=OIP.LtVWf3aOStPZb0HOWy9d4wHaJ4&pid=Api&P=0" alt="img" />
            </div>
            <div className="content">
              <h2>Title two</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur delectus eum incidunt. Beatae accusamus quod nam nihil quidem? Laboriosam suscipit similique corrupti vel mollitia assumenda laudantium dicta quae dolore corporis?.</p>
              <span>₹150/-</span>
              <Link className='btn-tour' to='!#'>Take a tour <i class="fas fa-arrow-right"></i></Link>
            </div>
          </div>
          <div className="card-box col-12 col-sm-12 mt-2">
            <div className="imgBx">
              <img src="https://tse2.mm.bing.net/th?id=OIP.3j36aovvngNpnfwJ1BCt6AAAAA&pid=Api&P=0" alt="img" />
            </div>
            <div className="content">
              <h2>Title three</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur delectus eum incidunt. Beatae accusamus quod nam nihil quidem? Laboriosam suscipit similique corrupti vel mollitia assumenda laudantium dicta quae dolore corporis?.</p>
              <span>₹190/-</span>
              <Link className='btn-tour' to='!#'>Take a tour <i class="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BrowseExhibition