import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function FeedbackForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [formstatus, setFormStatus] = useState(null);

    const handleForm = async (formData) => {
        console.log(formData);
        const response = await axios.post('/api/feedback-form', formData);
        if (response.status === 200){
            setFormStatus('Form submit successfully, Thank you!');
            reset();
        }
    }

    return (
        <> 
        {formstatus != null && (
            <div className='alert alert-success'>{formstatus}</div>
        )}
        <div className="feedback-form">
            <form onSubmit={handleSubmit(handleForm)}>
                <div className='form-group mb-4'>
                    <label htmlFor="email">E-mail Address:</label>
                    <input type="email" 
                    name="email" 
                    className='form-control' 
                    placeholder="Email Address" 
                    {...register("email",{
                        required: true
                    })}
                    />
                    {errors.email?.type === "required" && (
                        <small className='primary-clr'>Email field is required</small>
                    )}
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="number" 
                    name="phone" 
                    className='form-control' 
                    placeholder="" 
                    {...register("phone",{
                        required: true
                    })}
                    />
                    {errors.phone?.type === "required" && (
                        <small className='primary-clr'>Phone field is required</small>
                    )}
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor="message">How can we help you?</label>
                    <textarea name="message" type="text" 
                    id="" rows="5" 
                    className='form-control' 
                    placeholder="Description"
                    {...register("message",{
                        required: true
                    })}
                    ></textarea>
                    {errors.message?.type === "required" && (
                        <small className='primary-clr'>This field is required</small>
                    )}
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-raghuma">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default FeedbackForm
