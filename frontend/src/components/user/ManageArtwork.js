import React, { useEffect } from 'react'
import { useState } from 'react'
// import { NavLink } from 'react-router-dom';
import app_config from '../../config';
import { useFormik } from 'formik';
import { artSchema } from '../../validationSchema';
import Swal from 'sweetalert2';
import './ManageArtwork.css'
import ArtworkForm from './ArtworkForm';
import Typewriter from 'typewriter-effect';

const ManageArtwork = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [currentArt, setCurrentArt] = useState(JSON.parse(sessionStorage.getItem('art')));
  const [showForm, setShowForm] = useState(false);

  // console.log(currentUser._id);

  const deleteArt = async (id) => {
    alert('Delete '+currentUser._id);
  }
  const updateArt = async (id) => {
    alert('Update '+currentUser._id);
  }


  return (
    <>
      <div className="art-header-block">
        <div className="artHead">
          {/* <h1>Who are we?</h1> */}
          <Typewriter
            options={{
              wrapperClassName: 'animateContHead',
              cursorClassName: 'cursorAnimate',
              skipAddStyles: false,
              strings: [`Add some master pieces`, 'Show your skills'],
              autoStart: true,
              loop: true,
              delay: 150,
              deleteSpeed: 110
            }}
          />
          <p className='d-none d-md-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia quo quibusdam tempora adipisci, culpa laboriosam expedita dolore quae dolores consequuntur vitae facilis corrupti totam debitis recusandae unde quidem dicta?</p>
          <button
            type="button"
            className="btn"
            data-mdb-toggle="modal"
            data-mdb-target="#updateArtwork"
          >
            Add your artworks <i class="fas fa-arrow-right fa-lg"></i>
          </button>
        </div>
      </div>
      <div className='container-fluid contentBox'>
        <div
          className="modal fade"
          id="updateArtwork"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Artworks
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <ArtworkForm />
              </div>
            </div>
          </div>
        </div>

        <div className="content-table">
          <h2>Your Artworks</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th scope="row">1</th>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde?{/*currentArt.title*/}</td>
                <td className='disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo, optio porro repellendus mollitia cum quibusdam vel fugiat beatae sunt adipisci? In eaque ratione ullam harum accusantium doloremque voluptatum voluptate, animi mollitia doloribus dolorem non accusamus similique ex veniam tempora itaque voluptas. Amet officia architecto harum! Temporibus libero neque dolorem dolorum suscipit eum ducimus beatae eius ipsa! Impedit tenetur provident eos adipisci excepturi fuga reprehenderit autem at natus maxime iusto cumque alias, nesciunt tempore ab praesentium incidunt exercitationem dignissimos ex quod debitis vitae ea nemo corporis? Illum cum, atque unde similique amet labore, quaerat earum tempora ex ipsum totam laboriosam!{/*currentArt.discription*/}</td>
                <td>450000000000000{/*currentArt.price*/}</td>
                <td><i className="fas fa-edit fa-lg text-warning" onClick={updateArt}></i> |
                  <i className="fas fa-trash fa-lg text-danger" onClick={deleteArt}></i></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing.{/*currentArt.title*/}</td>
                <td className='disc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt magni in sed quod aut dolore ab eligendi maxime similique quibusdam.{/*currentArt.discription*/}</td>
                <td>45000000{/*currentArt.price*/}</td>
                <td><i className="fas fa-edit fa-lg text-warning" onClick={updateArt}></i> |
                  <i className="fas fa-trash fa-lg text-danger" onClick={deleteArt}></i></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}

export default ManageArtwork