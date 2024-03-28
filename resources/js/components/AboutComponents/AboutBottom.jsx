import React from 'react'
import Girl from 'imgPath/girl.png'

function AboutBottom() {
    return (
        <>
        <div className='container-fluid pt-5' style={{backgroundColor:'rgb(232 246 249)'}}>
            <h3 className='bold text-center'>H o w &nbsp; Y o u &nbsp; F e e l</h3>
            <h1 className='primary-clr text-center lily-script'>Comfy</h1>
            <div className='container pt-5'>
                <div className='row align-items-center'>
                    <div className='col-md-1'></div>
                    <div className='col-md-5 text-justify'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='col-md-6'>
                        <img src={ Girl } width="100%" alt="hostel" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutBottom
