import React from 'react'
import Typewriter from 'typewriter-effect'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container-fluid'>
      <div className="header-block">
        <div className="abtHead">
          {/* <h1>Who are we?</h1> */}
          <Typewriter
            options={{
              wrapperClassName: 'animateContHead',
              cursorClassName: 'cursorAnimate',
              skipAddStyles: false,
              strings: [`About us`, 'Who we are?'],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 100
            }}
          />
          <p className='d-none d-md-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia quo quibusdam tempora adipisci, culpa laboriosam expedita dolore quae dolores consequuntur vitae facilis corrupti totam debitis recusandae unde quidem dicta?</p>
        </div>
      </div>

      <section className='container-fluid row aboutUs'>
        <div className="abtimg1 col-12 col-md-6">
          <img className='w-100 d-none d-md-block' src="https://brandcoremedia.com/wp-content/uploads/Who-We-Are-01.png" alt="img" />
        </div>
        <div className="abtContent col-12 col-md-6">
          <h1>Who we are ?</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum rem inventore atque cumque veniam, possimus quas assumenda ea reprehenderit repudiandae cupiditate tenetur, porro excepturi nam at. Eos voluptates, nesciunt, deleniti voluptatum autem suscipit accusamus delectus officia quo nostrum non perspiciatis sit voluptatibus, in eligendi facilis excepturi tenetur laborum quisquam? Ea omnis obcaecati dolor odio nesciunt iure sed saepe ducimus, labore voluptatum maxime dolorum nisi magni quia quis blanditiis distinctio nihil quibusdam a id? Sequi distinctio officiis adipisci perferendis dicta optio odit asperiores eveniet libero fugit veritatis explicabo, assumenda delectus vero aliquid ipsa? Dignissimos pariatur autem quasi deleniti suscipit quae repellat!</p>
        </div>
      </section>
      <hr />
      <section className='abtteam mt-5'>
          <h2>Our Team Members</h2>
        <div className="abtinner">
          <div className="card">
            <div className="cardBody">
              <div className="picBx">
                <img src="https://tse2.mm.bing.net/th?id=OIP.QN5C9_bRA5Loj5yLvAYU7QHaJ9&pid=Api&P=0" alt="img" />
              </div>
              <div className="abt-Box">
                <h3>Keith <br /><span>Creative Designer</span></h3>
              </div>
            </div>
            <ul className='smi'>
              <li><Link to='!#'><i class="fa-brands fa-linkedin"></i></Link></li>
              <li><Link to='!#'><i class="fa-brands fa-facebook"></i></Link></li>
              <li><Link to='!#'><i class="fa-brands fa-twitter"></i></Link></li>
            </ul>
          </div>
          <div className="card">
            <div className="cardBody">
              <div className="picBx">
                <img src="https://tse2.mm.bing.net/th?id=OIP.QN5C9_bRA5Loj5yLvAYU7QHaJ9&pid=Api&P=0" alt="img" />
              </div>
              <div className="abt-Box">
                <h3>Keith <br /><span>Creative Designer</span></h3>
              </div>
            </div>
            <ul className='smi'>
              <li><Link to='!#'><i class="fa-brands fa-linkedin"></i></Link></li>
              <li><Link to='!#'><i class="fa-brands fa-facebook"></i></Link></li>
              <li><Link to='!#'><i class="fa-brands fa-twitter"></i></Link></li>
            </ul>
          </div>
          <div className="card">
            <div className="cardBody">
              <div className="picBx">
                <img src="https://tse2.mm.bing.net/th?id=OIP.QN5C9_bRA5Loj5yLvAYU7QHaJ9&pid=Api&P=0" alt="img" />
              </div>
              <div className="abt-Box">
                <h3>Keith <br /><span>Creative Designer</span></h3>
              </div>
            </div>
            <ul className='smi'>
              <li><Link to='!#'><i class="fa-brands fa-linkedin"></i></Link></li>
              <li><Link to='!#'><i class="fa-brands fa-facebook"></i></Link></li>
              <li><Link to='!#'><i class="fa-brands fa-twitter"></i></Link></li>
            </ul>
          </div>
        </div> 
      </section>
    </div>
  )
}

export default About