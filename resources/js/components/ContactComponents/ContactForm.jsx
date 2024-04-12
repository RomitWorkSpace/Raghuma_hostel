import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [formstatus, setFormStatus] = useState(null);

    const handleForm = async (formData) => {
        const response = await axios.post('/api/submit-form', formData);
        if (response.status === 200){
            setFormStatus('Form submit successfully');
            reset();
        }
    }

    return (
        <>
        {formstatus != null && (
            <div className='alert alert-success'>{formstatus}</div>
            )}
        <div className='contact-form'>
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
                        <input type="text" 
                            name="email" 
                            className='form-control' 
                            placeholder="Enter email" 
                            {...register("email",{
                                required: true
                            })}
                        />
                        {errors.email?.type === "required" && (
                        <small className='primary-clr'>Email field is required</small>
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
                        <input type="text" 
                            name="subject" 
                            className='form-control' 
                            placeholder="Subject" 
                            {...register("subject",{
                                required: true
                            })}
                        />
                        {errors.subject?.type === "required" && (
                        <small className='primary-clr'>Subject field is required</small>
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
        </>
    )
}

export default ContactForm
