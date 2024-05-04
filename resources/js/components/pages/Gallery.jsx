import React, { useEffect, useState } from 'react'
import GalleryBanner from 'imgPath/banners/gallery-banner.jpeg'
import axios from 'axios';

function Gallery() {
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

    var photoData = "";

    photoData = photo.map( (item) => {
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
        <div className='container-fluid p-0'>
            <img src={ GalleryBanner } alt="banner" width="100%" />
        </div>

        <div className='container pt-5 pb-5'>
            <div className='row'>
                { photoData }
            </div>
        </div>
        </>
    )
}

export default Gallery
