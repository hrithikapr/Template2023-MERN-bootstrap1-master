import React, { useEffect, useState } from 'react'
import './ArtworkForm.css'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import app_config from '../../config';
import { artSchema } from '../../validationSchema';

const ManageArtForm = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [currentArts, setCurrentArts] = useState(JSON.parse(sessionStorage.getItem('art')));
    const [artworkList, setArtworkList] = useState([]);

    const [selArtworks, setSelArtworks] = useState([]);

    const initialValues = {
        title: '',
        artworks: [],
        theme: 'white',
        price: 0,
        organizer: currentUser._id,
        start_at: '',
        end_at: ''
    }

    const url = app_config.apiurl;

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        // validationSchema: artSchema,
        onSubmit: async (values, { resetForm }) => {
            values.artworks = selArtworks;
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

    const fetchArtData = async () => {
        const res = await fetch(app_config.apiurl + '/art/getbyuser/' + currentUser._id)
        const artData = await res.json()
        console.log(artData);
        setArtworkList(artData.result);

    };

    useEffect(() => {
        fetchArtData();
    }, []);

    const handleSelArtwork = (art_id, op) => {
        // console.log(selArtworks);
        if (op === 'add') {
            if (!selArtworks.find(id => id === art_id)) setSelArtworks([...selArtworks, art_id]);
        } else if (op === 'remove') {
            setSelArtworks(selArtworks.filter(id => id !== art_id));
        }
    }


    return (
        <>
            <section className="form-content">
                <div className="artformBx">
                    <form className='art-form row' onSubmit={handleSubmit}>
                        <div className="your-arts">
                            <div className="arts">
                                {
                                    artworkList.map(art => (
                                        <label>
                                            <input type="checkbox" checked={selArtworks.includes(art._id)} onChange={e => {
                                                if (e.target.checked) handleSelArtwork(art._id, 'add');
                                                else handleSelArtwork(art._id, 'remove');
                                            }} />
                                            <span>{art.title}</span>
                                        </label>
                                    ))
                                }
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
                            <select name="theme" id="theme" onChange={handleChange} value={values.theme} onBlur={handleBlur}>
                                <option value='white'>White</option>
                                <option value='olive'>Olive</option>
                                <option value='grey'>Grey</option>
                                <option value='lightblue'>LightBlue</option>
                                <option value='golden'>Golden</option>
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