import React, { useState } from 'react'
import './ArtworkForm.css'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import app_config from '../../config';
import { artSchema } from '../../validationSchema';

const ManageArtForm = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const initialValues = {
        artwork: '',
        theme: '',
        ticket_price: '',
        start_date: '',
        start_time: '',
        end_date: '',
        end_time: ''
    }

    const url = app_config.apiurl;

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: artSchema,
        onSubmit: async (values, { resetForm }) => {

            const res = await fetch(url + '/exhibition/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)

            });
            console.log(values);
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
                        <div className="inputBx col-6">
                            <span>Artworks</span>
                            <select name="arts" id="arts">
                                <option value="white">White</option>
                                <option value="olive">Olive</option>
                                <option value="grey">Grey</option>
                                <option value="lightblue">LightBlue</option>
                                <option value="golden">Golden</option>
                            </select>
                        </div>
                        <div className="inputBx col-6">
                            <span>Ticket Price</span>
                            <input type="number" name='price' id='price' autoComplete='off' value={values.price} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div className="inputBx col-6">
                            <span>Themes</span>
                            <select name="theme" id="theme">
                                <option value="white">White</option>
                                <option value="olive">Olive</option>
                                <option value="grey">Grey</option>
                                <option value="lightblue">LightBlue</option>
                                <option value="golden">Golden</option>
                            </select>
                        </div>

                        <div className="inputBx col-6">
                            <span>Start date</span>
                            <input type="date" name='start-date' id='start-date' autoComplete='off' value={values.date} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div className="inputBx col-6">
                            <span>Start time</span>
                            <input type="time" name='start-time' id='start-time' autoComplete='off' value={values.date} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div className="inputBx col-6">
                            <span>End date</span>
                            <input type="date" name='end-date' id='end-date' autoComplete='off' value={values.date} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div className="inputBx col-6">
                            <span>End time</span>
                            <input type="time" name='end-time' id='end-time' autoComplete='off' value={values.date} onChange={handleChange} onBlur={handleBlur} />
                        </div>

                        <hr />
                        <div className="inputBx">
                            <input type="submit" value="Save" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ManageArtForm