import React, { useState } from 'react'
import './ArtworkForm.css'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import app_config from '../../config';
import { artSchema } from '../../validationSchema';

const ArtworkForm = ({refreshData}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [selImage, setSelImage] = useState(null);

    const initialValues = {
        title: "",
        image: "",
        artist: "",
        discription: "",
        organizer: currentUser._id,
        price: 0
    }

    const url = app_config.apiurl;

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        // validationSchema: artSchema,
        onSubmit: async (values, { resetForm }) => {
            values.image = selImage.name;
            console.log(values);
            const res = await fetch(url + '/art/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)

            });
            console.log(res.status);
            if (res.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Art added successfully'
                })
                resetForm();
                refreshData();
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            }
        }
    });

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        setSelImage(file);
        fd.append("myfile", file);
        fetch(url + "/util/uploadfile", {
          method: "POST",
          body: fd,
        }).then((res) => {
          if (res.status === 200) {
            console.log("file uploaded");
          }
        });
      };

    return (
        <>
            <section className="form-content">
                {/* <h2>Add your artworks</h2> */}
                <div className="artformBx">
                    <form className='art-form' onSubmit={handleSubmit}>
                        <div className="inputBx">
                            <span>Artwork Title</span>
                            <input type="text" name='title' id='title' autoComplete='off' value={values.title} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {errors.title && touched.title ?
                            <p className='text-danger form-error'>{errors.title}</p>
                            : null
                        }

                        <div className="inputImgBx">
                            <span>Upload Artwork</span>
                            <input type="file"  onChange={uploadFile} />
                        </div>

                        <div className="inputBx">
                            <span>Artwork Price</span>
                            <input type="number" name='price' id='price' autoComplete='off' value={values.price} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {errors.price && touched.price ?
                            <p className='text-danger form-error'>{errors.price}</p>
                            : null
                        }
                        <div className="inputBx">
                            <span>Artist</span>
                            <input type="text" name='artist' id='artist' autoComplete='off' value={values.artist} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {errors.discription && touched.discription ?
                            <p className='text-danger form-error'>{errors.discription}</p>
                            : null
                        }
                        <div className="inputBx">
                            <span>Artwork Description</span>
                            <input type="text" name='discription' id='discription' autoComplete='off' value={values.discription} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {errors.discription && touched.discription ?
                            <p className='text-danger form-error'>{errors.discription}</p>
                            : null
                        }
                        <hr />
                        <div className="inputBx">
                            <input type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ArtworkForm