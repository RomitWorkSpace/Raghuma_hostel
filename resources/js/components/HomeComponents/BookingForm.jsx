import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function BookingForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [formstatus, setFormStatus] = useState(null);

    const handleForm = async (formData) => {
        const response = await axios.post('/api/booking-form', formData);
        if (response.status === 200){
            setFormStatus('Form submit successfully');
            reset();
        }
    }

    return (
        <>
        <div className='container-fluid pt-5 pb-5'>
            <h2 className='primary-clr text-center lily-script'>Book Your Room</h2>
            <div className='container pt-4'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 form-wrapper'>
                        <div className='inner-wrapper'>
                        <form onSubmit={handleSubmit(handleForm)}>
                <div className='row'>
                    <div className='col-md-6 mb-4'>
                        <input type="text" 
                            name="name" 
                            className='form-control' 
                            placeholder="Enter name" 
                            {...register("name",{
                                required: true
                            })}
                        />
                        {errors.name?.type === "required" && (
                        <small className='primary-clr'>Name field is required</small>
                        )}
                    </div>
                    

                    <div className='col-md-6 mb-4'>
                        <input type="number" 
                            name="phone" 
                            className='form-control' 
                            placeholder="Phone" 
                            {...register("phone",{
                                required: true
                            })}
                        />
                        {errors.phone?.type === "required" && (
                        <small className='primary-clr'>Phone field is required</small>
                        )}
                    </div>

                    <div className='col-md-6 mb-4'>
                        <select name="hostel" 
                            className='form-control'
                            {...register("hostel",{
                                required: true
                            })}>
                            <option value="">------- Choose Hostel --------</option>
                            <option value="a_block">A Block</option>
                            <option value="b_block">B Block</option>
                            <option value="c_block">C Block</option>
                        </select>
                        {errors.hostel?.type === "required" && (
                        <small className='primary-clr'>field is required</small>
                        )}
                    </div>
                    

                    <div className='col-md-6 mb-4'>
                        <select name="room" 
                            className='form-control'
                            {...register("room",{
                                required: true
                            })}>
                            <option value="">----- Select Room Type ------</option>
                            <option value="single">Single Seater</option>
                            <option value="double">Double Seater</option>
                            <option value="triple">Tripple Seater</option>
                        </select>
                        {errors.room?.type === "required" && (
                        <small className='primary-clr'>Room type is required</small>
                        )}
                    </div>
                    

                    <div className='col-12 mb-4'>
                        <textarea name="message" id="message" rows="5" 
                        className='form-control' 
                        placeholder="Type your comment..."
                        {...register("message",{
                            required: true
                        })}
                        ></textarea>
                        {errors.message?.type === "required" && (
                        <small className='primary-clr'>Message field is required</small>
                        )}
                    </div>
                    <div className='submit-btn text-center mb-4'>
                        <button type="submit" className='btn btn-raghuma'>Submit</button>
                    </div>
                </div>
            </form>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BookingForm
