import React, { useEffect } from 'react'
import { useState } from 'react'
// import { NavLink } from 'react-router-dom';
import app_config from '../../config';
// import { useFormik } from 'formik';
// import { artSchema } from '../../validationSchema';
// import Swal from 'sweetalert2';
import './ManageArtwork.css'
import ArtworkForm from './ArtworkForm';
import Typewriter from 'typewriter-effect';
import { toast } from 'react-hot-toast';

const ManageArtwork = () => {

  const [currentArt, setCurrentArt] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  // const [showForm, setShowForm] = useState(false);

  const fetchArtData = async () => {
    const res = await fetch(app_config.apiurl + '/art/getbyuser/'+currentUser._id)
    const artData = await res.json()
    console.log(artData);
    setCurrentArt(artData.result)

  };
  useEffect(() => {
    fetchArtData();
  }, []);


  const deleteArt = async (id) => {
    // alert('Delete ' + id);
    const res = await fetch(app_config.apiurl + '/art/detete' + id, { method: 'DELETE' })
    console.log(res.status);

    fetchArtData();

    if (res.status === 200) {
      toast.success('Artwork deleted')
    }
  }
  const updateArt = async (id) => {
    alert('Update ' + currentUser._id);
    // setShowForm(true)
    // setCurrentArt(id)

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
            Add your artworks <i className="fas fa-arrow-right fa-lg"></i>
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
                <ArtworkForm refreshData={fetchArtData} />
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
                <th scope="col">Image</th>
                <th scope="col">Artist</th>
                <th scope="col">Description</th>
                <th scope="col">Price </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>

              {currentArt && currentArt.map((art, index) => {

                return (
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{art.title}</td>
                    <td>
                      <img src={app_config.apiurl + '/' + art.image} height={200} />
                    </td>
                    <td>{art.artist}</td>
                    <td className='disc'>{art.discription}</td>
                    <td>₹{art.price}</td>
                    <td className='action-btn'>
                      <button className='btn btn-warning' onClick={updateArt}><i className="fas fa-edit fa-lg"></i></button> &nbsp;
                      <button className='btn btn-danger' onClick={() => { deleteArt(art._id) }}><i className="fas fa-trash fa-lg"></i></button>
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}

export default ManageArtwork