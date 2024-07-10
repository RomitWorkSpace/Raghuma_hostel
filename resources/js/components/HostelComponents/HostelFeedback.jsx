import React from 'react'
import FeedbackForm from './FeedbackForm'

function HostelFeedback() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5'>
            <div className='container pt-4'>
                <div className='row'>
                    <div className="col-md-1"></div>
                    <div className='col-md-4 mb-4'>
                        <h3>For Any Queries</h3>
                        <p>For any inquiries,  questions orrequests for qoutes,<br/>
                             please call:+91-9315312530 or fill out the following form: raghumahostel@gmail.com</p>
                    </div>
                    <div className="col-md-6">
                        <FeedbackForm />
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HostelFeedback
