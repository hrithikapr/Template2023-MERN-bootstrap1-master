import React, { useState } from 'react'
import './ArtworkForm.css'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import app_config from '../../config';
import { artSchema } from '../../validationSchema';

const ManageArtForm = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [currentArts, setCurrentArts] = useState(JSON.parse(sessionStorage.getItem('art')));

    const initialValues = {
        title: '',
        artworks: [currentArts],
        theme: 'White',
        price: 0,
        start_at: '',
        end_at: ''
    }

    const url = app_config.apiurl;

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        // validationSchema: artSchema,
        onSubmit: async (values, { resetForm }) => {
            console.log(values);

            const res = await fetch(url + '/exhibition/add', {
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
            <section className="form-content">
                <div className="artformBx">
                    <form className='art-form row' onSubmit={handleSubmit}>
                        <div className="your-arts">
                            <div className="arts">
                                {}
                                <label>
                                    <input type="checkbox" name='art1' value={values.artworks} onChange={handleChange} onBlur={handleBlur} />
                                    <span>Art1</span>
                                </label>
                            </div>
                        </div>
                        <hr />
                        <div className="inputBx ">
                            <span>Exhibition title</span>
                            <input type="text" name='title' id='title' autoComplete='off' value={values.title} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div className="inputBx col-6">
                            <span>Ticket Price</span>
                            <input type="number" name='price' id='price' autoComplete='off' value={values.price} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div className="inputBx col-6">
                            <span>Themes</span>
                            <select name="theme" id="theme" onChange={handleChange} onBlur={handleBlur}>
                                <option value={values.theme}>White</option>
                                <option value={values.theme}>Olive</option>
                                <option value={values.theme}>Grey</option>
                                <option value={values.theme}>LightBlue</option>
                                <option value={values.theme}>Golden</option>
                            </select>
                        </div>

                        <div className="inputBx col-6">
                            <span>Start date</span>
                            <input type="date" name='start_at' id='start_at' autoComplete='off' value={values.start_at} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div className="inputBx col-6">
                            <span>End date</span>
                            <input type="date" name='end_at' id='end_at' autoComplete='off' value={values.end_at} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <hr />
                        <div className="inputBx">
                            <input type="submit" value='Save' />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ManageArtForm