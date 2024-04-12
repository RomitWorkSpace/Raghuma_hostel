import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

function GallerySection() {
    useEffect(() => {
        AOS.init();
      }, []);

    const [photo, setPhoto] = useState([]);
    useEffect(() => {

        axios.get(`/api/photos`).then(res=>{
            if(res.status === 200)
            {
                setPhoto(res.data.photos)
                // setLoading(false);
            }
        });

    }, []);

    var photoData ="";

    photoData = photo.slice(0, 3).map( (item) => {
        return (
            <>
                <div className='col-md-4 mb-4'>
                    <div className='photo-bg'>
                    <img src={`https://brandaile.com/public/images/photos/${item.image}`} alt="service" width="100%" />
                    </div>
                </div>
            </>
        )
    })
    return (
        <>
        <div className='container-fluid pt-5 pb-5' data-aos="fade-up">
            <h1 className='primary-clr text-center lily-script'>Photogallery</h1>
            <h5 className='bold text-center'>O u r &nbsp; A c c o m o d a t i o n</h5>
            <div className='container gallery text-center pt-5'>
                <div className='row'>
                    { photoData }
                </div>
                <Link to="/gallery">
                    <button className='btn btn-raghuma'>View More</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default GallerySection
