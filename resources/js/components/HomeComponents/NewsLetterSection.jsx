import React from 'react'
import NewsBg from 'imgPath/news-letter-bg.png'

function NewsLetterSection() {
    return (
        <>
        <div className='container-fluid text-center news-bg pt-5 pb-5' style={{backgroundImage: `url(${NewsBg})`}}>
            <div className='container pt-5 pb-5'>
                <h1 className='lily-script clr-white'>Stay Tuned With Updates</h1>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-8 p-0'>
                                <input type="text" name="email" className='form-control' style={{borderRadius: '0px', height:'50px'}} placeholder='Your Email'/>
                            </div>
                            <div className='col-4 p-0'>
                                <input type="button" name="submit" className='form-control bg-raghuma clr-white' value="submit" style={{borderRadius: '0px',height:'50px'}} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewsLetterSection
